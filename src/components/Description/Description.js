import React from 'react';

function DescriptionItem (props) {
    return (<dl>
        <dt>{props.key}</dt>
        <dd>{props.value}</dd>
    </dl>);
}

export default DescriptionItem;