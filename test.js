const findEvenNumber = () => {
	let oneToFifty = 1;
	const evenNumber = [];

	for(oneToFifty ; oneToFifty < 51;oneToFifty++){
		if(oneToFifty%2 === 0)
		evenNumber.push(oneToFifty);
 	}
	return evenNumber;
 }
