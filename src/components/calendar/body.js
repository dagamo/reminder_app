import React from 'react';
import { Box } from '@material-ui/core';

const body = (props) => {
const {days} = props
  console.log('body days', days)
	return (
		<Box style={{ display: 'flex', flexWrap: 'wrap', flex: 1 }}>
			{days.map((day, i) => (
				<Box
        key={i}
					style={{
						width: '14.28%',
						textAlign: 'center',
            paddingLeft: 15,
            paddingRight:15,
            paddingTop:25,
            paddingBottom:25,
            fontSize: '1.7rem',
            fontWeight:'normal'
					}}
				>
					<Box component="span">{day}</Box>
				</Box>
			))}
		</Box>
	);
};

export default body;
