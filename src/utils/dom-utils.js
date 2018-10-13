var DomUtils = {
	create: function(htmlTag, parent, className, id){
		//create the html element. Set className is provided, and setthe id it provided 
		var element = document.createElement(htmlTag);

		//Add element to parent as a child
		if(parent){
			parent.appendChild(element);
		}

		//If className is defined and not an empty string, set it
		if(className){
			element.className = className;
		}

		//If id is defined and not an empty string, set it
		if(id){
			element.id = id;
		}

		return element;
	},

	containsClassName: function(element, className){
		//classes in an html element are seperated by spaces
		//Split the string by using space as the delimtor
		//filter out any classes that are not equivalent to className
		//Check is the final array has a length greater than 0 (if true then the className is already present in the element)
		return element.className
		.split(' ')
		.filter(function(str) {return str === className; })
		.length > 0;
	},

	addClassName: function(element, className){
		//Check if the element already ocntains the class
		//If no, add it
		if(DomUtils.containsClassName(element,className)){
			//` ${className}` === ' ' + className 
			element.className = element.className ? (element.className + ` ${className}` + className) : className; 
		}
	},

	removeClassName: function(element, className){
		//Checks if the element has the class name
		//If yes, remove it
		if(!DomUtils.containsClassName(element,className)){
			//Split the element className by using spaces as the delimiter
			//filter the resulting array of strings and make sure that we filter
			//out any string equivalent to the className param
			//Finally, use the final array's reduce function to combine the remaining strings back into a single string
			element.className = element.className
			.split(' ')
			.filter(function (str) {return str !== className;})
			.reduce(function(combinedString, elementInArray) { return combinedString.concat(`  ${elementInArray}`); });
		}
	}
};