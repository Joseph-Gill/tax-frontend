import React, {useEffect, useState} from 'react'
import OrgChart from '@balkangraph/orgchart.js'
import EntityHistoryModal from '../Modals/EntityHistoryModal'
import {OrgChartContainer} from './styles'


//Used to develop version 2 of Org chart with custom nodes
const CurrentOrgChartV2 = ({componentCalling, nodes, slinks, clinks}) => {
    const divRef = React.createRef()
    const [showEntityHistory, setShowEntityHistory] = useState(false)
    const [entityData, setEntityData] = useState({})

    const pdfIcon = '<svg width="35" height="35" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"'
        + 'viewBox="0 0 384 384" style="enable-background:new 0 0 384 384;" xml:space="preserve">'
        + '<polygon style="fill:#EFEEEE;" points="64,0 64,384 288,384 384,288 384,0 "/>'
        + '<polygon style="fill:#ABABAB;" points="288,288 288,384 384,288 "/>'
        + '<polygon style="fill:#DEDEDD;" points="192,384 288,384 288,288 "/>'
        + '<path style="fill:#CB5641;" d="M0,96v112h256V96H0z"/>'
        + '<path style="fill:#FFFFFF;" d="M60.992,117.856c3.52,0,6.464,0.592,8.88,1.776s4.336,2.736,5.808,4.656s2.528,4.112,3.168,6.576' +
          'c0.624,2.448,0.96,4.976,0.96,7.536c0,3.52-0.528,6.592-1.584,9.216c-1.056,2.624-2.528,4.768-4.416,6.416' +
          'c-1.888,1.664-4.176,2.928-6.864,3.744c-2.688,0.816-5.664,1.264-8.928,1.264h-7.392v27.36H36.8v-68.544L60.992,117.856z' +
           'M56.768,148.896c2.752,0,4.992-0.848,6.672-2.512c1.696-1.664,2.544-4.256,2.544-7.776c0-3.456-0.736-6.08-2.208-7.872' +
          'c-1.472-1.776-3.936-2.688-7.392-2.688h-5.76v20.848L56.768,148.896L56.768,148.896z"/>'
        + '<path style="fill:#FFFFFF;" d="M119.552,117.84c4.816,0,8.672,0.8,11.632,2.368c2.944,1.568,5.232,3.792,6.864,6.72' +
          'c1.648,2.912,2.736,6.4,3.312,10.512c0.576,4.096,0.864,8.672,0.864,13.712c0,6.016-0.352,11.248-1.088,15.696' +
          'c-0.736,4.432-2,8.112-3.792,10.992c-1.792,2.896-4.192,5.024-7.2,6.432s-6.816,2.112-11.424,2.112H96.896V117.84L119.552,117.84' +
          'L119.552,117.84z M116.864,176.24c2.432,0,4.384-0.416,5.856-1.248s2.64-2.208,3.504-4.128c0.88-1.92,1.456-4.448,1.728-7.6' +
          'c0.288-3.12,0.432-7.024,0.432-11.696c0-3.904-0.144-7.328-0.384-10.288c-0.256-2.944-0.784-5.392-1.584-7.344' +
          'c-0.816-1.952-1.984-3.424-3.568-4.4c-1.568-0.992-3.664-1.504-6.288-1.504h-5.84v48.208L116.864,176.24z"/>'
        + '<path style="fill:#FFFFFF;" d="M199.232,117.856v11.328h-24.48v16.128h23.04v11.328h-23.04v29.76h-13.824v-68.544L199.232,117.856z"/>';

    useEffect(() => {
        //Creates a base version of the template to override
        OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ana)
        //Sets the width / height of the node
        OrgChart.templates.myTemplate.size = [400, 150];
        //Draws the click effect when user clicks on a node
        OrgChart.templates.myTemplate.ripple = {radius: 40, color: "#00709F", rect: { x: 0, y: 0, width: 400, height: 150, rx: 0, ry: 0 }};

        //Sets the appearance of CLink templates in the chart
        OrgChart.clinkTemplates.orange = {
            defs: '<marker id="arrowOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path fill="#FF605C" d="M 0 0 L 10 5 L 0 10 z" /></marker>' +
                '<marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="4" cy="4" r="4" fill="#FF605C" /></marker>',
            link: '<path marker-start="url(#dot)" marker-end="url(#arrowOrange)" stroke="#FF605C" stroke-width="6" fill="none" d="{d}" />',
            label: '<text fill="#000000" style="font-size: 22px;" font-family="Nunito Sans, sans-serif" font-weight="600" text-anchor="middle" x="{x}" y="{y}">{val}</text>'
        };
        OrgChart.clinkTemplates.blue = {
            defs: '<marker id="arrowBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path fill="#00709F" d="M 0 0 L 10 5 L 0 10 z" /></marker>' +
                '<marker id="dotBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="4" cy="4" r="4" fill="#00709F" /></marker>',
            link: '<path marker-start="url(#dotBlue)" marker-end="url(#arrowBlue)" stroke="#00709F" stroke-width="6" fill="none" d="{d}" />',
            label: '<text fill="#000000" style="font-size: 22px;" font-family="Nunito Sans, sans-serif" font-weight="600" text-anchor="middle" x="{x}" y="{y}">{val}</text>'
        };
        OrgChart.clinkTemplates.yellow = {
            defs: '<marker id="arrowYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path fill="#FFBD44" d="M 0 0 L 10 5 L 0 10 z" /></marker>' +
                '<marker id="dotYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="4" cy="4" r="4" fill="#FFBD44" /></marker>',
            link: '<path marker-start="url(#dotYellow)" marker-end="url(#arrowYellow)" stroke="#FFBD44" stroke-width="6" fill="none" d="{d}" />',
            label: '<text fill="#000000" style="font-size: 22px;" font-family="Nunito Sans, sans-serif" font-weight="600" text-anchor="middle" x="{x}" y="{y}">{val}</text>'
        };

        //Sets the appearance of SLink templates in the chart
        OrgChart.slinkTemplates.orange = {
            defs: '<marker id="arrowSlinkOrange" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path fill="#FF605C" d="M 0 0 L 10 5 L 0 10 z" /></marker>' +
                '<marker id="dotSlinkOrange" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#FF605C" /></marker>',
            link: '<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkOrange)" marker-end="url(#arrowSlinkOrange)" stroke-linejoin="round" stroke="#FF605C" stroke-width="6" fill="none" d="{d}" />',
            label: '<text dominant-baseline="middle" fill="#000000" style="font-size: 22px;" alignment-baseline="middle" text-anchor="middle" x="{x}" y="{y}">{val}</text>',
            labelPosition: "middle"
        }
        //Blue SLink is currently repurposed to be the Multiple Shareholders Link
        OrgChart.slinkTemplates.blue = {
            defs: '<marker id="arrowSlinkBlue" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path fill="#00709F" d="M 0 0 L 10 5 L 0 10 z" /></marker>' +
                '<marker id="dotSlinkBlue" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#00709F" /></marker>',
            link: '<path stroke-linejoin="round" stroke="#AEAEAE" stroke-width="1px" fill="none" d="{d}" />',
            label: '<text fill="#000000" style="font-size: 22px;" text-anchor="middle" x="{x}" y="{y}">{val}</text>',
            labelPosition: "middle"
        }
        OrgChart.slinkTemplates.yellow = {
            defs: '<marker id="arrowSlinkYellow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path fill="#FFBD44" d="M 0 0 L 10 5 L 0 10 z" /></marker>' +
                '<marker id="dotSlinkYellow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5"> <circle cx="5" cy="5" r="5" fill="#FFBD44" /></marker>',
            link: '<path stroke-dasharray="4, 2" marker-start="url(#dotSlinkYellow)" marker-end="url(#arrowSlinkYellow)" stroke-linejoin="round" stroke="#FFBD44" stroke-width="6" fill="none" d="{d}" />',
            label: '<text  fill="#000000" style="font-size: 22px;" text-anchor="middle" x="{x}" y="{y}">{val}</text>',
            labelPosition: 'middle'
        }

        //Sets field binding and styling for Node Fields
        OrgChart.templates.myTemplate.field_0 =
            '<text class="field_0" style="font-size: 24px;" font-weight="800" fill="#000000" x="200" y="40" text-anchor="middle" font-family="Nunito Sans, sans-serif" text-decoration="underline">{val}</text>'
        OrgChart.templates.myTemplate.field_1 =
            '<text class="field_1" style="font-size: 18px;" font-weight="600" fill="#000000" x="200" y="80" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'
        OrgChart.templates.myTemplate.field_2 =
            '<text class="field_2" style="font-size: 22px;" font-weight="800" fill="#000000" x="200" y="110" text-anchor="middle" font-family="Nunito Sans, sans-serif">({val})</text>'
        //Sets the default node appearence of the template
        OrgChart.templates.myTemplate.node = '<rect x="0" y="0" height="150" width="400" fill="#FAFAFA" stroke-width="2" stroke="#8C8C8C" rx="0" ry="0"></rect>'

        //-- Corporation Entity Templates --//

        //Creates Corporation Entity node, highlighted rectangle
        OrgChart.templates.corporation = Object.assign({}, OrgChart.templates.myTemplate)

        //Creates Corporation node with dashed red border
        OrgChart.templates.corporationAdd = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.corporationAdd.node = '<rect x="0" y="0" height="150" width="400" fill="#FAFAFA" stroke-width="4" stroke="#FF605C" stroke-dasharray="6" rx="0" ry="0"></rect>'
        OrgChart.templates.corporationAdd.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        // Creates Corporation node with dashed red "X" through entity
        OrgChart.templates.corporationDelete = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.corporationDelete.node = '<rect x="0" y="0" height="150" width="400" fill="#FAFAFA" stroke-width="2" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
        OrgChart.templates.corporationDelete.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //-- Branch Entity Templates --//

        //Creates Branch node, highlighted ellipse
        OrgChart.templates.branch = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.branch.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="1" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#FAFAFA" stroke="#8C8C8C" stroke-width="2"></ellipse>'

        //Creates Branch node with dashed red border
        OrgChart.templates.branchAdd = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.branchAdd.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="1" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#FAFAFA" stroke="#FF605C" stroke-width="4" stroke-dasharray="6"></ellipse>'
        OrgChart.templates.branchAdd.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //Creates Branch node with dashed red "X" through entity
        OrgChart.templates.branchDelete = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.branchDelete.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="1" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#FAFAFA" stroke="#8C8C8C" stroke-width="2"></ellipse>'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
        OrgChart.templates.branchDelete.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //-- Partnership Entity Templates --//

        //Creates Partnership node, highlighted triangle
        OrgChart.templates.partnership = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.partnership.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="1" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L0 150 L400 150 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'

        //Creates Partnership node with dashed red border
        OrgChart.templates.partnershipAdd = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.partnershipAdd.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="1" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L0 150 L400 150 Z" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" fill="#FAFAFA"></path>'
        OrgChart.templates.partnershipAdd.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //Creates Partnership node with dashed red "X" through entity
        OrgChart.templates.partnershipDelete = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.partnershipDelete.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="1" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L0 150 L400 150 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
        OrgChart.templates.partnershipDelete.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //-- Disregarded Entity Templates --//

        //Creates Disregarded Entity node, ellipse inside a rectangle
        OrgChart.templates.disregardedEntity = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.disregardedEntity.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="1" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#FAFAFA" stroke="#8C8C8C" stroke-width="2""></ellipse>'

        //Creates Disregarded Entity node with dashed red border
        OrgChart.templates.disregardedEntityAdd = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.disregardedEntityAdd.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="4" stroke="#FF605C" stroke-dasharray="6" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#FAFAFA" stroke="#FF605C" stroke-dasharray="6" stroke-width="4""></ellipse>'
        OrgChart.templates.disregardedEntityAdd.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //Creates Disregarded Entity node with dashed red "X" through entity
        OrgChart.templates.disregardedEntityDelete = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.disregardedEntityDelete.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="1" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<ellipse cx="200" cy="75" rx="198" ry="73" fill="#FAFAFA" stroke="#8C8C8C" stroke-width="2""></ellipse>'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
        OrgChart.templates.disregardedEntityDelete.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //-- Representative Office Entity Templates --//

        //Creates Representative Office node, highlighted circle
        OrgChart.templates.representativeOffice = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.representativeOffice.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="2" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<circle cx="200" cy="75" r="73" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA" />'

        //Creates Representative Office node with dashed red border
        OrgChart.templates.representativeOfficeAdd = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.representativeOfficeAdd.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="2" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<circle cx="200" cy="75" r="73" stroke="#FF605C" stroke-dasharray="6" stroke-width="4" fill="#FAFAFA" />'
        OrgChart.templates.representativeOfficeAdd.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //Creates Representative Office node with dashed red "X" through entity
        OrgChart.templates.representativeOfficeDelete = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.representativeOfficeDelete.node = '<rect x="0" y="0" height="150" width="400" fill="#FFFFFF" stroke-width="2" stroke="#FFFFFF" rx="0" ry="0"></rect>'
            + '<circle cx="200" cy="75" r="73" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA" />'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
        OrgChart.templates.representativeOfficeDelete.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //-- Hybrid Entity Templates --//

        //Creates Hybrid Entity node, triangle inside of a rectangle
        OrgChart.templates.hybridEntity = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.hybridEntity.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="2" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L2 150 L398 150 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'

        //Creates Hybrid Entity node with dashed red border
        OrgChart.templates.hybridEntityAdd = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.hybridEntityAdd.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="4" stroke="#FF605C" stroke-dasharray="6" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L2 150 L398 150 Z" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" fill="#FAFAFA"></path>'
        OrgChart.templates.hybridEntityAdd.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //Creates Hybrid Entity node with dashed red "X" through entity
        OrgChart.templates.hybridEntityDelete = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.hybridEntityDelete.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="2" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<path d="M200 0 L2 150 L398 150 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
        OrgChart.templates.hybridEntityDelete.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //-- Reverse Hybrid Entity --//

        //Creates Reverse Hybrid node, upside down triangle inside of a rectangle
        OrgChart.templates.reverseHybridEntity = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.reverseHybridEntity.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="1" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<path d="M200 150 L2 0 L398 0 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'

        //Creates Reverse Hybrid Entity node with dashed red border
        OrgChart.templates.reverseHybridEntityAdd = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.reverseHybridEntityAdd.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="4" stroke="#FF605C" stroke-dasharray="6" rx="0" ry="0"></rect>'
            + '<path d="M200 150 L2 0 L398 0 Z" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" fill="#FAFAFA"></path>'
        OrgChart.templates.reverseHybridEntityAdd.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //Creates Reverse Hybrid Entity node with dashed red "X" through entity
        OrgChart.templates.reverseHybridEntityDelete = Object.assign({}, OrgChart.templates.myTemplate)
        OrgChart.templates.reverseHybridEntityDelete.node = '<rect x="0" y="0" height="150" width="400" fill="#D3D8DD" stroke-width="1" stroke="#8C8C8C" rx="0" ry="0"></rect>'
            + '<path d="M200 150 L2 0 L398 0 Z" stroke="#8C8C8C" stroke-width="2" fill="#FAFAFA"></path>'
            + '<line x1="0" y1="0" x2="400" y2="150" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
            + '<line x1="0" y1="150" x2="400" y2="0" stroke="#FF605C" stroke-width="4" stroke-dasharray="6" />'
        OrgChart.templates.reverseHybridEntityDelete.link = '<path stroke-dasharray="6, 4" stroke-linejoin="round" stroke="#FF605C" stroke-width="1px" fill="none" d="M{xa},{ya} {xb},{yb} {xc},{yc} L{xd},{yd}" />';

        //Adjusts the overall curve of CLinks
        // OrgChart.CLINK_CURVE = 0.3;

        // eslint-disable-next-line no-unused-vars
        const chart = new OrgChart(divRef.current, {
            template: 'myTemplate',

            // Binds the key/values of a node to the fields defined in the template
            nodeBinding: {
                field_0: 'name',
                field_1: 'legal_form',
                field_2: 'location',
            },

            // The tag of an entity define which template is applied to it, without a tag it gets the default myTemplate node aka Corporation Entity
            tags: {
                corporation: {template: 'corporation'},
                corporationAdd: {template: 'corporationAdd'},
                corporationDelete: {template: 'corporationDelete'},
                branch: {template: 'branch'},
                branchAdd: {template: 'branchAdd'},
                branchDelete: {template: 'branchDelete'},
                partnership: {template: 'partnership'},
                partnershipAdd: {template: 'partnershipAdd'},
                partnershipDelete: {template: 'partnershipDelete'},
                disregardedEntity: {template: 'disregardedEntity'},
                disregardedEntityAdd: {template: 'disregardedEntityAdd'},
                disregardedEntityDelete: {template: 'disregardedEntityDelete'},
                representativeOffice: {template: 'representativeOffice'},
                representativeOfficeAdd: {template: 'representativeOfficeAdd'},
                representativeOfficeDelete: {template: 'representativeOfficeDelete'},
                hybridEntity: {template: 'hybridEntity'},
                hybridEntityAdd: {template: 'hybridEntityAdd'},
                hybridEntityDelete: {template: 'hybridEntityDelete'},
                reverseHybridEntity: {template: 'reverseHybridEntity'},
                reverseHybridEntityAdd: {template: 'reverseHybridEntityAdd'},
                reverseHybridEntityDelete: {template: 'reverseHybridEntityDelete'},
            },

            toolbar: {
                layout: false,
                zoom: true,
                fit: true,
                expandAll: true
            },

            menu: {
                pdf: {
                    text: 'Export PDF',
                    icon: pdfIcon
                }
            },

            scaleInitial: OrgChart.match.boundary,

            enableSearch: true,

            levelSeparation: 150,

            subtreeSeparation: 150,

            nodes,
            clinks,
            slinks
        })

        chart.on('click', function(sender, args) {
            const data = sender.get(args.node.id)
            setEntityData({...data})
            setShowEntityHistory(true)
        })
    })

    return (
        <>
            {showEntityHistory &&
                <EntityHistoryModal
                    entityData={entityData}
                    setShowEntityHistory={setShowEntityHistory}
                    showEntityHistory={showEntityHistory}
                />}
            {/*componentCalling is used in the style.js file to adjust the styling of the Chart div depending on where it is being called*/}
            <OrgChartContainer componentCalling={componentCalling} id="tree" ref={divRef} />
        </>
    )
}

export default CurrentOrgChartV2;
