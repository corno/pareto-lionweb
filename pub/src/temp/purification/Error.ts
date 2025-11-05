export type Refinement_Error = 
| ['missing property', { 'property': string, 'path': string }]
| ['unexpected property', { 'property': string, 'path': string }]
