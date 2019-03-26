import React from 'react';

import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SubHeader/SubHeader";
import Attribute from "../Attribute/Attribute";

const Content = (props) => {
    const item = props.data;
    if (!item) { return null }
    return (
        <section className='content'>
            <SectionHeader
                header="Chosen Item"
                description="this is another option to show the explanation under each section. maybe shows only at hover/pressed?"
            />
            <div className='content__sidebar-left'>
                <SubHeader
                    header='General details'
                    description='explanation under each section.'
                    hint="here comes the hint"
                />
                <Attribute k="Name" v={item.name}/>
                <Attribute k="Description" v={item.description} size='l'/>
                <Attribute k="Resource type" v={item.resourceType}/>
                <Attribute k="Path" v={item.path}/>
            </div>
            <div className='content__sidebar-right'>
                <SubHeader
                    header='Permitted actions'
                    description='explanation under each section.'
                    hint="here comes the hint"
                />
                <Attribute v="Action1"/>
            </div>
        </section>
    );
};

export default Content;
