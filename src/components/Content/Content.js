import React, { Component } from 'react';

import { connect } from 'react-redux';
import SectionHeader from "../SectionHeader/SectionHeader";
import SubHeader from "../SubHeader/SubHeader";
import Attribute from "../Attribute/Attribute";

class Content extends Component {
    render() {
        const content = this.props.content;
        return <section className='content'>
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
                <Attribute k="Name" v={content.name}/>
                <Attribute k="Description" v={content.description} size='l'/>
                <Attribute k="Resource type" v={content.resourceType}/>
                <Attribute k="Path" v={content.path}/>
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
    }
}

const mapStateToProps = state => ({
    content: state.resources.selectedResource
});

export default connect(mapStateToProps)(Content)