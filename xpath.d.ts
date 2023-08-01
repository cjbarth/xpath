/// <reference lib="dom" />

export type ScalarValue = string | number | boolean;

export type SelectReturnType = Array<Node> | ScalarValue;
export type SelectSingleReturnType = ScalarValue | Node | undefined;

type Nullable<T> = T | null | undefined;

export interface XPathSelect {
    (expression: Nullable<undefined>, node: Node): [];
    (expression: Nullable<undefined>, node: Node, single: false): [];
    (expression: string, node: Node): SelectReturnType;
    (expression: string, node: Node, single: false): SelectReturnType;
    (expression: Nullable<string>, node: Node, single: true): SelectSingleReturnType;
}

/**
 * Evaluate an XPath expression against a DOM node.
 */
export function select(expression: Nullable<undefined>, node: Node): [];
export function select(expression: Nullable<undefined>, node: Node, single: false): [];
export function select(expression: string, node: Node): SelectReturnType;
export function select(expression: string, node: Node, single: false): SelectReturnType;
export function select(expression: Nullable<string>, node: Node, single: true): SelectSingleReturnType;

/**
 * Evaluate an xpath expression against a DOM node, returning the first result only.
 */
export function select1(expression: Nullable<string>, node: Node): SelectSingleReturnType;

/**
 * Evaluate an XPath expression against a DOM node using a given namespace resolver.
 */
export function selectWithResolver(expression: Nullable<undefined>, node: Node, resolver?: Nullable<XPathNSResolver>): [];
export function selectWithResolver(expression: Nullable<undefined>, node: Node, resolver: Nullable<XPathNSResolver>, single: false): [];
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
export function isNodeLike(value: unknown): value is Node;
export function isArrayOfNodes(value: unknown): value is Node[];
export function isElementNode(value: unknown): value is Element;
export function isAttributeNode(value: unknown): value is Attr;
export function isTextNode(value: unknown): value is Text;
export function isCDATASectionNode(value: unknown): value is CDATASection;
export function isProcessingInstructionNode(value: unknown): value is ProcessingInstruction;
export function isCommentNode(value: unknown): value is Comment;
export function isDocumentNode(value: unknown): value is Document;
export function isDocumentTypeNode(value: unknown): value is DocumentType;
export function isDocumentFragmentNode(value: unknown): value is DocumentFragment;

export function assertIsNodeLike(value: unknown): asserts value is Node;
export function assertIsArrayOfNodes(value: unknown): asserts value is Node[];
export function assertIsElementNode(value: unknown): asserts value is Element;
export function assertIsAttributeNode(value: unknown): asserts value is Attr;
export function assertIsTextNode(value: unknown): asserts value is Text;
export function assertIsCDATASectionNode(value: unknown): asserts value is CDATASection;
export function assertIsProcessingInstructionNode(value: unknown): asserts value is ProcessingInstruction;
export function assertIsCommentNode(value: unknown): asserts value is Comment;
export function assertIsDocumentNode(value: unknown): asserts value is Document;
export function assertIsDocumentTypeNode(value: unknown): asserts value is DocumentType;
export function assertIsDocumentFragmentNode(value: unknown): asserts value is DocumentFragment;
