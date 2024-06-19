import { close, query } from '@/database'

const QUERY = `
REMOVE TABLE IF EXISTS user;
REMOVE TABLE IF EXISTS userLocation;
REMOVE TABLE IF EXISTS room;

REMOVE SCOPE IF EXISTS user;
REMOVE SCOPE IF EXISTS temporal;

DEFINE TABLE user SCHEMALESS
    PERMISSIONS FULL;
DEFINE TABLE userLocation SCHEMALESS
    PERMISSIONS FULL;
DEFINE TABLE locationOf SCHEMALESS
    PERMISSIONS FULL;
DEFINE TABLE room SCHEMALESS
    PERMISSIONS FULL;

DEFINE SCOPE user SESSION 14d
    SIGNIN (
        SELECT * FROM user WHERE email = $email AND 
        crypto::argon2::compare(password, $password)
    )
    SIGNUP (
        CREATE user CONTENT {
            email: $email,
            name: $name,
            password: crypto::argon2::generate($password)
        }
    );
    
DEFINE SCOPE temporal SESSION 14d
    SIGNUP (
        CREATE user CONTENT {
            name: $name,
            temporal: true
        }
    );
`
;(async () => {
  await query(QUERY)

  await close()
})()
