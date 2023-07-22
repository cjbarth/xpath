/// <reference lib="dom" />

export type ScalarValue = string | number | boolean;

export type SelectReturnType = Array<Node> | ScalarValue;
export type SelectSingleReturnType = ScalarValue | Node | undefined;

type Nullable<T> = T | null

export interface XPathSelect {
    (expression: Nullable<undefined>, node: Node): [];
    (expression: Nullable<undefined>, node: Node, single: false): [];
    (expression: Nullable<undefined>, node: Node, single: true): undefined;
    (expression: string, node: Node): SelectReturnType;
    (expression: string, node: Node, single: false): SelectReturnType;
    (expression: string, node: Node, single: true): SelectSingleReturnType;
}

/**
 * Evaluate an XPath expression against a DOM node.
 */
export function select(expression: Nullable<undefined>, node: Node): [];
export function select(expression: Nullable<undefined>, node: Node, single: false): [];
export function select(expression: Nullable<undefined>, node: Node, single: true): undefined;
export function select(expression: string, node: Node): SelectReturnType;
export function select(expression: string, node: Node, single: false): SelectReturnType;
export function select(expression: string, node: Node, single: true): SelectSingleReturnType;

/**
 * Evaluate an xpath expression against a DOM node, returning the first result only.
 */
export function select1(expression: Nullable<undefined>, node: Node): undefined;
export function select1(expression: string, node: Node): SelectSingleReturnType;

/**
 * Evaluate an XPath expression against a DOM node using a given namespace resolver.
 */
export function selectWithResolver(expression: Nullable<undefined>, node: Node, resolver?: Nullable<XPathNSResolver>): [];
export function selectWithResolver(expression: Nullable<undefined>, node: Node, resolver?: Nullable<XPathNSResolver>, single: false): [];
export function selectWithResolver(expression: Nullable<undefined>, node: Node, resolver?: Nullable<XPathNSResolver>, single: true): undefined;
export function selectWithResolver(expression: string, node: Node, resolver?: Nullable<XPathNSResolver>): SelectReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: Nullable<XPathNSResolver>, single: false): SelectReturnType;
export function selectWithResolver(expression: string, node: Node, resolver: Nullable<XPathNSResolver>, single: true): SelectSingleReturnType;

/**
 * Creates a `select` function that uses the given namespace prefix to URI mappings when evaluating queries.
 * @param namespaceMap an object mapping namespace prefixes to namespace URIs.  Each key is a prefix; each value is a URI.
 * @return a function with the same signature as `xpath.select`
 */
export function useNamespaces(namespaceMap: Record<string, string>): XPathSelect;

// Type guards to narrow down the type of the selected type of a returned Node object
export function isNodeLike(value: Nullable<SelectSingleReturnType>): value is Node;
export function isArrayOfNodes(value: Nullable<SelectReturnType>): value is Node[];
export function isElementNode(value: Nullable<SelectSingleReturnType>): value is Element;
export function isAttributeNode(value: Nullable<SelectSingleReturnType>): value is Attr;
export function isTextNode(value: Nullable<SelectSingleReturnType>): value is Text;
export function isCDATASectionNode(value: Nullable<SelectSingleReturnType>): value is CDATASection;
export function isProcessingInstructionNode(value: Nullable<SelectSingleReturnType>): value is ProcessingInstruction;
export function isCommentNode(value: Nullable<SelectSingleReturnType>): value is Comment;
export function isDocumentNode(value: Nullable<SelectSingleReturnType>): value is Document;
export function isDocumentTypeNode(value: Nullable<SelectSingleReturnType>): value is DocumentType;
export function isDocumentFragmentNode(value: Nullable<SelectSingleReturnType>): value is DocumentFragment;
