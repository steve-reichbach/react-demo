import React, { Component } from 'react';

import { connect } from 'react-redux';
import SectionHeader from '../SectionHeader/SectionHeader';
import SubHeader from '../SubHeader/SubHeader';
import Attribute from '../Attribute/Attribute';

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
                <Attribute title="Name" value={content.name}/>
                <Attribute title="Description" value={content.description} size='l'/>
                <Attribute title="Resource type" value={content.resourceType}/>
                <Attribute title="Path" value={content.path}/>
            </div>
            <div className='content__sidebar-right'>
                <SubHeader
                    header='Permitted actions'
                    description='explanation under each section.'
                    hint="here comes the hint"
                />
                { content.actions && content.actions.map(a => <Attribute key={ a.id } value={ a.name }/>) }
            </div>
        </section>
    }
}

const mapStateToProps = state => ({
    content: state.resources.selectedResource
});

export default connect(mapStateToProps)(Content)