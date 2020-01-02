import React from 'react'
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
// import Themes from './screens/Themes';

EStyleSheet.build({	
	$primaryBlue: '#4F607A',
	$primaryOrange: '#D57A66',
	$primaryGreen: '#00BD9D',
	$primaryPurple: '#9e768f',

	$white: '#ffffff',
	$border: '#e2e2e2',
	$inputText: '#797979',
	$lightGray: '#f0f0f0',
	$darkText: '#343434',
	
});


export default () => <Home /> ;