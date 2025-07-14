import { AppContext } from '../../../../context'
import { Server } from '../../../../lexicon'

export default function (server: Server, ctx: AppContext) {
  server.app.bsky.unspecced.getAgeAssuranceState({
    auth: ctx.authVerifier.standard,
    handler: async () => {
      return {
        encoding: 'application/json',
        body: {
          lastInitiatedAt: '1970-01-01T00:00:00.000Z',
          status: 'assured',
        },
      }
    },
  })
}
