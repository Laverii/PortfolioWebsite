var DomUtils = {
	create: function(htmlTag, className, id){
		var element = document.createElement(htmlTag);
		element.className = className ? className : '';
		element.id = id ? id : '';

		return element;
	},

	containsClassName: function(element, className){
		element.className
		.split(' ')
		.filter(function(str) {str === className; })
		.length > 0;
	},

	addClassName: function(element, className){
		if(DomUtils.containsClassName(element,className)){
			//` ${className}` === ' ' + className 
			element.className = element.className ? (element.className + ` ${className}` + className) : className; 
		}

	}
};