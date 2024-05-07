import { Surreal } from 'surrealdb.js'

const db = new Surreal()

const QUERY = `
REMOVE TABLE IF EXISTS user;
REMOVE SCOPE IF EXISTS user;
REMOVE SCOPE IF EXISTS temporal;

DEFINE TABLE user SCHEMALESS
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
  await db.connect('http://127.0.0.1:8000/rpc', {
    database: 'itachi',
    namespace: 'main',
  })

  await db.query(QUERY)

  await db.close()
})()
