
import {
  GrantConfig,
  GrantOptions,
  KoaMiddleware,
  GrantInstance
} from 'grant'

/**
 * Koa handler
 */
export default function (config: GrantConfig | GrantOptions): KoaMiddleware & GrantInstance
