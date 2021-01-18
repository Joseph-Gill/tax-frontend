import React, {useEffect} from 'react'
import OrgChart from '@balkangraph/orgchart.js'


const ChartEdit = ({nodes, slinks, clinks}) => {
    const divRef = React.createRef()

    useEffect(() => {
        // Changing default Olivia Template field positions and adding button
        OrgChart.templates.olivia.field_0 =
            '<text class="field_0" width="230" text-overflow="multiline" style="font-size: 18px;" fill="#000000" x="125" y="30" text-anchor="middle">{val}</text>'
        OrgChart.templates.olivia.field_1 =
            '<text class="field_1" style="font-size: 14px;" fill="#000000" x="125" y="60" text-anchor="middle">{val}</text>'
        OrgChart.templates.olivia.field_2 =
            '<text class="field_2" style="font-size: 14px;" fill="#000000" x="125" y="80" text-anchor="middle">{val}</text>'
        OrgChart.templates.olivia.node += '<g class="svg-btn"><rect x="3" y="87" width="60" height="30" />'
            + '<text style="font-size: 12px;" fill="#000" x="33" y="106" text-anchor="middle">Template</text></g>'

        // Creating custom template for SLink with red coloring
        OrgChart.slinkTemplates.myred = Object.assign({}, OrgChart.slinkTemplates.orange)
        OrgChart.slinkTemplates.myred.defs = ''
        OrgChart.slinkTemplates.myred.link = '<path stroke-dasharray="4, 2" stroke="red" stroke-width="1" fill="none" d="{d}" />'

        // This allows the creation of templates with opacity boarders
        OrgChart.templates.myTemplate = Object.assign({}, OrgChart.templates.ula)
        OrgChart.templates.myTemplate.node = '<rect style="opacity: 0.3" x="-20" y="-20" height="160" width="290" fill="red" stroke-dasharray="20 3" stroke-width="7" rx="5" ry="5" stroke="red" />' + OrgChart.templates.myTemplate.node
        OrgChart.templates.myTemplate.field_0 =
            '<text class="field_0" width="230" text-overflow="multiline" style="font-size: 18px;" fill="#000000" x="125" y="30" text-anchor="middle">{val}</text>'
        OrgChart.templates.myTemplate.field_1 =
            '<text class="field_1" style="font-size: 14px;" fill="#000000" x="125" y="60" text-anchor="middle">{val}</text>'
        OrgChart.templates.myTemplate.field_2 =
            '<text class="field_2" style="font-size: 14px;" fill="#000000" x="125" y="80" text-anchor="middle">{val}</text>'

        // This allows you to adjust where the curve of CLinks are on the screen
        OrgChart.CLINK_CURVE = -1.5

        const chart = new OrgChart(divRef.current, {
            // Menu sets up the option to be able to download the chart you are view, atm it does not seem to reflect CSS changes made to the chart
            // menu: {
            //     pdf: {text: 'Export PDF'},
            //     png: {text: 'Export PNG'},
            //     svg: {text: 'Export SVG'},
            //     csv: {text: 'Export CSV'}
            // },

            // Sets the predefined template of the org chart, see docs for names ( https://balkangraph.com/OrgChartJS/Docs/PredefinedTemplates )
            template: 'olivia',

            // Binds the key/values of a node to the fields defined in the template
            nodeBinding: {
                field_0: 'name',
                field_1: 'legalForm',
                field_2: 'location',
            },

            // Tags let you bind specific templates to tags attached to nodes
            tags: {
                myTemplate: {
                    template: 'myTemplate'
                }
            },

            // NodeMenu provides you access to the options menu on each node
            nodeMenu: {
                details: {text: 'Details'},
                edit: {text: 'Edit'},
                add: {text: 'Add'},
                remove: {text: 'Remove'}
            },

            // This controls the toolbar and what options appear on the toolbar
            align: OrgChart.ORIENTATION,
            toolbar: {
                layout: false,
                zoom: true,
                fit: true,
                expandAll: true
            },

            enableSearch: true,

            nodes,
            clinks,
            slinks
        })
        chart.on('redraw', function(){
            const btns = document.querySelectorAll('.svg-btn')
            for(let i = 0; i < btns.length; i++){
                btns[i].addEventListener('click', function(e){
                    e.preventDefault()
                    e.stopPropagation()
                    // alert('My logic goes here for node with id: ' + this.parentNode.getAttribute('node-id'))
                    // eslint-disable-next-line react/no-this-in-sfc
                    const nodeId = this.parentNode.getAttribute('node-id')
                    const targetNode = nodes.filter(node => node.id === nodeId)
                    targetNode[0].tags = ["myTemplate"]
                })
            }
        })
    })

    return (
        <div id="tree" ref={divRef} />
    )
}

export default ChartEdit;
