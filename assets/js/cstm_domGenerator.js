esElm = new function ()
{
    this.elemAttr = function (elemName, attr, filter, existing)
    {
        var element = (existing !== undefined && existing.tagName == elemName) ? existing : document.createElement(elemName); 

        if(filter.indexOf("type") !== -1 && attr["type"] !== undefined)
            element.setAttribute("type", attr["type"]);
        if(filter.indexOf("placeholder") !== -1 && attr["placeholder"] !== undefined)
            element.setAttribute("placeholder", attr["placeholder"]);
        if(filter.indexOf("id") !== -1 && attr["id"] !== undefined)
            element.setAttribute("id", attr["id"]);
        if(filter.indexOf("class") !== -1 && attr["class"] !== undefined)
            element.setAttribute("class", attr["class"]);
        if(filter.indexOf("style") !== -1 && attr["style"] !== undefined)
            element.setAttribute("style", attr["style"]);
        if(filter.indexOf("name") !== -1 && attr["name"] !== undefined)
            element.setAttribute("name", attr["name"]);
        if(filter.indexOf("href") !== -1 && attr["href"] !== undefined)
            element.setAttribute("href", attr["href"]);
        if(filter.indexOf("for") !== -1 && attr["for"] !== undefined)
            element.setAttribute("for", attr["for"]);
        if(filter.indexOf("value") !== -1 && attr["value"] !== undefined)
            element.setAttribute("value", attr["value"]);
        if(filter.indexOf("text") !== -1 && attr["text"] !== undefined && attr["text"])
            element.appendChild(document.createTextNode(attr["text"]));
        if(filter.indexOf("src") !== -1 && attr["src"] !== undefined && attr["src"])
            element.setAttribute("src", attr["src"]);
        if(filter.indexOf("alt") !== -1 && attr["alt"] !== undefined && attr["alt"])
            element.setAttribute("alt", attr["alt"]);
        if(filter.indexOf("data-toggle") !== -1 && attr["data-toggle"] !== undefined && attr["data-toggle"])
            element.setAttribute("data-toggle", attr["data-toggle"]);        
        if(filter.indexOf("data-target") !== -1 && attr["data-target"] !== undefined && attr["data-target"])
            element.setAttribute("data-target", attr["data-target"]);
        if(filter.indexOf("node") !== -1 && attr["node"] !== undefined && attr["node"])
            element.appendChild(attr["node"]);
        if(filter.indexOf("data-thumb") !== -1 && attr["data-thumb"] !== undefined)
            element.setAttribute("data-thumb", attr["data-thumb"]);
        if(filter.indexOf("data-src") !== -1 && attr["data-src"] !== undefined)
            element.setAttribute("data-src", attr["data-src"]);
        


        if(filter.indexOf("options") !== -1 && attr["options"] !== undefined && attr["options"] && Array.isArray(attr["options"])) {

            attr["options"].forEach(function (option, index) {
                element.appendChild(Elm.option(option));
            })
        }
        
        return element;
    }

    this.input = function (attr, existing)
    {
        var element = this.elemAttr('INPUT', attr, 
            ["placeholder", "id", "class", "name", "type"], existing);

        return element;
    }

    this.textarea = function (attr, existing)
    {
        return this.elemAttr('TEXTAREA', attr, 
            ["placeholder", "id", "class", "name"], existing);
    }

    this.select = function (attr, existing)
    {
        return this.elemAttr('SELECT', attr, 
            ["id", "class", "node", "name", "options"], existing);
    }

    this.autocomplete = function (attr, existing)
    {
        var elem = this.elemAttr('INPUT', attr, 
            ["placeholder", "id", "class", "name", "type"], existing);

        if (attr["options"] !== undefined && Array.isArray(attr["options"]))
        {
            var customClass = (attr["customClass"] !== undefined) ? attr["customClass"] : "";
            $(elem).autocomplete({
                source: attr["options"],
                minLength: 0,
            }).focus(function() {
                $(this).autocomplete("search");
                $(this).trigger('keydown');
            }).autocomplete( "widget" ).addClass( customClass );
        }

        return elem;
    }

    this.datePicker = function (attr, existing)
    {
        var elem = this.elemAttr('INPUT', attr, 
            ["placeholder", "id", "class", "name"], existing);
        var dd;

        if (attr["options"] !== undefined)
        {
            dd = (attr["options"]["dd"] !== undefined) ? true : undefined;
        }
        util.generateDatePicker(elem, dd);

        return elem;				
    }

    this.option = function (attr, existing)
    {
        return this.elemAttr('OPTION', attr, 
            ["id", "class", "value", "text"], existing);
    }

    this.div = function (attr, existing)
    {
        return this.elemAttr('DIV', attr, 
            ["id", "class", "text", "node", "style", "data-thumb", "data-src"], existing);
    }

    this.header = function (attr, existing)
    {
        return this.elemAttr('HEADER', attr, 
            ["id", "class", "text", "node", "style"], existing);
    }

    this.span = function (attr, existing)
    {
        return this.elemAttr('span', attr, 
            ["id", "class", "text", "node", "style"], existing);
    }

    this.a = function (attr, existing)
    {
        return this.elemAttr('a', attr, 
            ["href", "id", "class", "text", "node", "style", "data-toggle", "data-target"], existing);
    }

    this.p = function (attr, existing)
    {
        return this.elemAttr('P', attr, 
            ["id", "class", "text", "node"], existing);
    }

    this.b = function (attr, existing)
    {
        return this.elemAttr('B', attr, 
            ["id", "class", "text", "node"], existing);
    }

    this.ul = function (attr, existing)
    {
        return this.elemAttr('UL', attr, 
            ["id", "class", "text", "node", "name"], existing);
    }

    this.li = function (attr, existing)
    {
        return this.elemAttr('LI', attr, 
            ["id", "class", "text", "node", "name"], existing);
    }

    this.img = function (attr, existing)
    {
        return this.elemAttr('IMG', attr, 
            ["id", "class", "src", "alt"], existing);
    }

    this.h1 = function (attr, existing)
    {
        return this.elemAttr('H1', attr, 
            ["id", "class", "text", "node"], existing);
    }

    this.h2 = function (attr, existing)
    {
        return this.elemAttr('H2', attr, 
            ["id", "class", "text", "node"], existing);
    }

    this.h4 = function (attr, existing)
    {
        return this.elemAttr('H4', attr, 
            ["id", "class", "text", "node"], existing);
    }

    this.label = function (attr, existing)
    {
        return this.elemAttr('LABEL', attr, 
            ["id", "class", "for", "text", "node"], existing);
    }

    this.button = function (attr, existing)
    {
        var element = this.elemAttr('BUTTON', attr, 
            ["id", "class", "text", "data-toggle", "data-target", "node"], existing);

        attr["type"] = (!element.hasAttribute("type")) ? "button": attr["type"];

        return this.elemAttr('BUTTON', attr, ["type"], element);
    }

    this.tag = function (element, attr, existing)
    {	
        if(element == 'input') element = this.input(attr, existing);
        else if(element == 'textarea') element = this.textarea(attr, existing);
        else if(element == 'select') element = this.select(attr, existing);
        else if(element == 'autocomplete') element = this.autocomplete(attr, existing);
        else if(element == 'option') element = this.option(attr, existing);
        else if(element == 'div') element = this.div(attr, existing);
        else if(element == 'header') element = this.header(attr, existing);
        else if(element == 'span') element = this.span(attr, existing);
        else if(element == 'p') element = this.p(attr, existing);
        else if(element == 'a') element = this.a(attr, existing);
        else if(element == 'img') element = this.img(attr, existing);
        else if(element == 'label') element = this.label(attr, existing);
        else if(element == 'button') element = this.button(attr, existing);
        else if(element == 'datePicker') element = this.datePicker(attr, existing);
        else if(element == 'ul') element = this.ul(attr, existing);
        else if(element == 'li') element = this.li(attr, existing);
        else if(element == 'b') element = this.li(attr, existing);
        else if(element == 'h1') element = this.h1(attr, existing);
        else if(element == 'h2') element = this.h2(attr, existing);
        else if(element == 'h4') element = this.h4(attr, existing);

        return element;
    }

    this.txt = function (text)
    {
        return document.createTextNode(text);
    }
}

esLayouts = new function ()
{
    this.generateTag = function (tagObj)
    {
        if (tagObj["tag"] !== undefined) 
        {
            var tagElem = esElm.tag(tagObj["tag"], {
                "id": tagObj["id"],
                "class": tagObj["class"],
                "type": tagObj["type"],
                "text": tagObj["text"],
                "name": tagObj["name"],
                "placeholder": tagObj["placeholder"],
                "options": tagObj["options"],
                "data-toggle": tagObj["data-toggle"],
                "data-target": tagObj["data-target"],
                "data-thumb": tagObj["data-thumb"],
                "data-src": tagObj["data-src"],
                "src": tagObj["src"],
                "alt": tagObj["alt"],
                "href": tagObj["href"]
            });

            if(tagObj["node"] !== undefined && Array.isArray(tagObj["node"]) && tagObj["node"].length > 0 && (tagObj["node"])) {
                tagObj["node"].forEach(function (innerTag, index) {
                    tagElem.appendChild(esLayouts.generateTag(innerTag))
                });
            }

           return tagElem;
        } else return Elm.txt("");
    }
}