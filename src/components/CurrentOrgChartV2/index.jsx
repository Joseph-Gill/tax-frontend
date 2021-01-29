import React, {useEffect} from 'react'
import OrgChart from '@balkangraph/orgchart.js'
import {OrgChartContainer} from './styles'


//Used to develop version 2 of Org chart with custom nodes
const CurrentOrgChartV2 = ({componentCalling, nodes, slinks, clinks}) => {
    const divRef = React.createRef()

    useEffect(() => {
        //Creates a base version of the template to override
        OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana)
        //Sets the width / height of the node
        OrgChart.templates.myTemplate.size = [400, 150];
        //Draws the click effect when user clicks on a node
        OrgChart.templates.myTemplate.ripple = {radius: 40, color: "#00709F", rect: { x: 0, y: 0, width: 400, height: 150, rx: 0, ry: 0 }};
        //Sets field binding and styling for Node Fields
        OrgChart.templates.myTemplate.field_0 =
            '<text class="field_0" style="font-size: 24px;" font-weight="800" fill="#000000" x="200" y="40" text-anchor="middle" font-family="Nunito Sans, sans-serif" text-decoration="underline">{val}</text>'
        OrgChart.templates.myTemplate.field_1 =
            '<text class="field_1" style="font-size: 18px;" font-weight="600" fill="#000000" x="200" y="80" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'
        OrgChart.templates.myTemplate.field_2 =
            '<text class="field_2" style="font-size: 22px;" font-weight="800" fill="#000000" x="200" y="110" text-anchor="middle" font-family="Nunito Sans, sans-serif">({val})</text>'

        //Draws the Node
        OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="2" stroke="#8C8C8C" rx="0" ry="0"></rect>'

        //Creates Hybrid Entity node, triangle inside of a rectangle
        OrgChart.templates.hybridEntity = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.hybridEntity.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="2" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L2 150 L398 150 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'

        //Creates Reverse Hybrid node, upside down triangle inside of a rectangle
        OrgChart.templates.reverseHybridEntity = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.reverseHybridEntity.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="1" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<path d="M200 150 L2 0 L398 0 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'

        //Creates Disregarded Entity node, ellipse inside a rectangle
        OrgChart.templates.disregardedEntity = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.disregardedEntity.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="1" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#FAFAFA" stroke="#8C8C8C" stroke-width="2""></ellipse>'

        //Creates Branch node, highlighted ellipse inside a rectangle
        OrgChart.templates.branch = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.branch.node = '<rect x="0" y="0" height="150" width="400" fill="#FAFAFA" stroke-width="1" stroke="#D3D8DD" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#D3D8DD" stroke="#8C8C8C" stroke-width="2""></ellipse>'

        //Creates Branch node, highlighted triangle inside a rectangle
        OrgChart.templates.partnership = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.partnership.node = '<rect x="0" y="0" height="150" width="400" fill="#FAFAFA" stroke-width="1" stroke="#D3D8DD" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L0 150 L400 150 Z" stroke="#8C8C8C" stroke-width="2" fill="#D3D8DD"></path>'

        //Creates Representative Office node, highlighted circle inside a rectangle
        OrgChart.templates.representativeOffice = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.representativeOffice.node = '<rect x="0" y="0" height="150" width="400" fill="#FAFAFA" stroke-width="2" stroke="#D3D8DD" rx="0" ry="0"></rect>'
            + '<circle cx="200" cy="75" r="73" stroke="#8C8C8C" stroke-width="2" fill="#D3D8DD" />'

        //Creates Corporation node with dashed red "X" through entity
        OrgChart.templates.corporationWithX = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.corporationWithX.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="2" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="2" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="2" stroke-dasharray="6" />'

        //Creates Corporation node with dashed red border
        OrgChart.templates.corporationDashedRedBorder = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.corporationDashedRedBorder.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="2" stroke="#FF605C" stroke-dasharray="6" rx="0" ry="0"></rect>'

        //Creates Corporation node with solid red border
        OrgChart.templates.corporationSolidRedBorder = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.corporationSolidRedBorder.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="2" stroke="#FF605C" rx="0" ry="0"></rect>'


        // eslint-disable-next-line no-unused-vars
        const chart = new OrgChart(divRef.current, {
            template: 'myTemplate',

            // Binds the key/values of a node to the fields defined in the template
            nodeBinding: {
                field_0: 'name',
                field_1: 'legal_form',
                field_2: 'location',
            },

            tags: {
                partnership: {
                    template: 'partnership'
                },
                branch: {
                    template: 'branch'
                },
                disregardedEntity: {
                    template: 'disregardedEntity'
                },
                representativeOffice: {
                    template: 'representativeOffice'
                },
                hybridEntity: {
                    template: 'hybridEntity'
                },
                reverseHybridEntity: {
                    template: 'reverseHybridEntity'
                }
            },

            toolbar: {
                layout: false,
                zoom: true,
                fit: true,
                expandAll: true
            },

            scaleInitial: 0.5,

            enableSearch: true,

            nodes,
            clinks,
            slinks
        })
    })

    return (
        // componentCalling is used in the style.js file to adjust the size of the Chart div depending on where it is being called
        <OrgChartContainer componentCalling={componentCalling} id="tree" ref={divRef} />
    )
}

export default CurrentOrgChartV2;
