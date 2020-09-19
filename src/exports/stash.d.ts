/**
 * loads data maps
 * @example
 * stash.addDataMap({
 *  'User': {
 *    'Name': 'Snow',
 *    'Age': 26
 *  }
 * });
 */
export function addDataMap(maps: object): void;

/**
 * loads data templates
 * @example
 * stash.addDataTemplate({
 *  'User.NewUser': {
 *    'Name': 'Snow',
 *    'Age': 26,
 *    'Address': []
 *  }
 * });
 */
export function addDataTemplate(template: object): void;