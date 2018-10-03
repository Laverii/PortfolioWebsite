var DomUtils = {
	create: function(htmlTag, className, id){
		//create the html element. Set className is provided, and setthe id it provided 
		var element = document.createElement(htmlTag);
		element.className = className ? className : '';
		element.id = id ? id : '';

		return element;
	},

	containsClassName: function(element, className){
		//classes in an html element are seperated by spaces
		//Split the string by using space as the delimtor
		//filter out any classes that are not equivalent to className
		//Check is the final array has a length greater than 0 (if true then the className is already present in the element)
		return element.className
		.split(' ')
		.filter(function(str) {str === className; })
		.length > 0;
	},

	addClassName: function(element, className){
		//Check if the element already ocntains the class
		//If no, add it
		if(DomUtils.containsClassName(element,className)){
			//` ${className}` === ' ' + className 
			element.className = element.className ? (element.className + ` ${className}` + className) : className; 
		}

	}
};