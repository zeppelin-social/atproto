import { AppContext } from '../../../../context'
import { Server } from '../../../../lexicon'

export default function (server: Server, ctx: AppContext) {
  server.app.bsky.unspecced.initAgeAssurance({
    auth: ctx.authVerifier.standard,
    handler: async () => {
      return {
        encoding: 'application/json',
        body: {
          status: 'assured',
          lastInitiatedAt: new Date().toISOString(),
        },
      }
    },
  })
}
