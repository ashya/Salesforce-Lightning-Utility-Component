({
	toggleCollapseHandler : function(component, event) 
    {  
        var existingText = component.get("v.collpaseText"); 
        var container = component.find("containerCollapsable") ;
        var closeIcon = component.find("closeIcon") ;
        var openIcon = component.find("openIcon") ;
        
        if(existingText === "chevronright")
        {
             component.set("v.collpaseText","chevrondown");
            $A.util.addClass(container, 'slds-hide');
            $A.util.addClass(closeIcon, 'slds-hide');
            $A.util.removeClass(openIcon, 'slds-hide'); 
        }
        else
        {
            component.set("v.collpaseText","chevronright");
            $A.util.removeClass(container, 'slds-hide');
            $A.util.addClass(openIcon, 'slds-hide');
            $A.util.removeClass(closeIcon, 'slds-hide'); 
        }  
	}
})