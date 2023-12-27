/// <reference lib="dom" />

export type ScalarValue = string | number | boolean;

export type SelectReturnType = Array<Node> | ScalarValue;
export type SelectSingleReturnType = ScalarValue | Node | undefined;

export interface XPathSelect {
    (expression: string, node: Node): SelectReturnType;
    (expression: string, node: Node, single: false): SelectReturnType;
    (expression: string, node: Node, single: true): SelectSingleReturnType;
}

/**
 * Evaluate an XPath expression against a DOM node.
 */
export function select(expression: string, node: Node): SelectReturnType;
export function select(expression: string, node: Node, single: false): SelectReturnType;
export function select(expression: string, node: Node, single: true): SelectSingleReturnType;

/**
 * Evaluate an xpath expression against a DOM node, returning the first result only.
 */
export function select1(expression: string, node: Node): SelectSingleReturnType;

/**
 * Evaluate an XPath expression against a DOM node using a given namespace resolver.
 */
export function selectWithResolver(expression: string, node: Node, resolver?: NonNullable<XPathNSResolver>): SelectReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: NonNullable<XPathNSResolver>, single: false): SelectReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: NonNullable<XPathNSResolver>, single: true): SelectSingleReturnType;

/**
 * Creates a `select` function that uses the given namespace prefix to URI mappings when evaluating queries.
 * @param namespaceMap an object mapping namespace prefixes to namespace URIs.  Each key is a prefix; each value is a URI.
 * @return a function with the same signature as `xpath.select`
 */
export function useNamespaces(namespaceMap: Record<string, string>): XPathSelect;

// Type guards to narrow down the type of the selected type of a returned Node object
export function isNodeLike(value: ScalarValue): value is Node;
export function isArrayOfNodes(value: SelectReturnType): value is Node[];
export function isElement(value: ScalarValue): value is Element;
export function isAttribute(value: ScalarValue): value is Attr;
export function isTextNode(value: ScalarValue): value is Text;
export function isCDATASection(value: ScalarValue): value is CDATASection;
export function isProcessingInstruction(value: ScalarValue): value is ProcessingInstruction;
export function isComment(value: ScalarValue): value is Comment;
export function isDocumentNode(value: ScalarValue): value is Document;
export function isDocumentTypeNode(value: ScalarValue): value is DocumentType;
export function isDocumentFragment(value: ScalarValue): value is DocumentFragment;
