const express = require('express')
const next = require('next')

/**
 * exress-graphql 추가 
 * graphqlHTTP, resolvers, buildSchema(schema)
 */
var graphqlHTTP = require('express-graphql')
import resolvers from './graphql/resolvers'
var { buildSchema } = require('graphql')

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!'
  }
}

const ExpressApp = express()

/**
 * express dev모드로 실행 진행
 */
const dev = process.env.NODE_ENV === 'development'
const PORT = process.env.PORT || 3000

const NextApp = next({
  dev, // 개발 모드인지 프로덕션인지에 대한 플래그 (true / false)
  quiet: dev,
  conf: {
    // next.config.js 에서 사용하는 객체 값
    webpack: {}
  }
})
const NextHandler = NextApp.getRequestHandler()

// const CustomRouter = require('./routes');
const NextRouter = express.Router()

// NextRouter.get('*', (req, res) => NextApp.render(req, res, '*', Object.assign({}, req.query, req.param)));
// NextRouter.get('/route-b', (req, res) => {
//   const result = {
//     'SOME RESULT': 'FROM DB'
//   };
//   res.result = result;

//   return NextApp.render(req, res, 'route-b', Object.assign({}, req.query, req.param))
// });
NextRouter.get('*', (req, res) => NextHandler(req, res))
NextRouter.get('/test', (req, res) => {
  return NextApp.render(req, res, 'route-b', Object.assign({}, req.query, req.param))
})

ExpressApp.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true
  })
)

NextApp.prepare().then(() => {
  // ExpressApp.use('/', CustomRouter);

  ExpressApp.use('/', NextRouter)

  // ExpressApp.use(
  //   '/graphql',
  //   graphqlHTTP({
  //     schema: schema,
  //     rootValue: resolvers,
  //     graphiql: true
  //   })
  // )

  ExpressApp.listen(PORT, err => {
    if (err) throw err
    console.log(`Listening on ::${PORT}`)
  })
})
