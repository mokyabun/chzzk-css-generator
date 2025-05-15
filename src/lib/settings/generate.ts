interface CSSSelector {
    element?: string;
    class?: string;

    child: CSSSelector;
}

function generateSelector(selector: CSSSelector): string {
    let result = "";
    if (selector.element) {
        result += selector.element;
    }

    if (selector.class) {
        result += `[class*='${selector.class}']`;
    }

    if (selector.child) {
        result += ` > ${generateSelector(selector.child)}`;
    }

    return result;
}
