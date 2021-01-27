import React, {useEffect} from 'react'
import OrgChart from '@balkangraph/orgchart.js'
import {OrgChartContainer} from './styles'
import './styles.css'


const CurrentOrgChart = ({componentCalling, clinks, nodes, slinks}) => {
    const divRef = React.createRef()

    useEffect(() => {
        // This controls where the text fields appear on the org chart nodes
        OrgChart.templates.olivia.field_0 =
            '<text class="field_0" width="230" text-overflow="multiline" style="font-size: 18px;" fill="#000000" x="125" y="30" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'
        OrgChart.templates.olivia.field_1 =
            '<text class="field_1" style="font-size: 14px;" fill="#000000" x="125" y="60" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'
        OrgChart.templates.olivia.field_2 =
            '<text class="field_2" style="font-size: 14px;" fill="#000000" x="125" y="80" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'

        // eslint-disable-next-line no-unused-vars
        const chart = new OrgChart(divRef.current, {
            template: 'olivia',

            // Binds fields defined in the template to which key of the node object they should display
            nodeBinding: {
                field_0: 'name',
                field_1: 'legal_form',
                field_2: 'location',
            },

            // Controls which tools are available on the Org Chart toolbar
            toolbar: {
                layout: false,
                zoom: true,
                fit: true,
                expandAll: true
            },

            // Controls if the search bar is enabled on the Org Chart
            enableSearch: true,

            // Controls the initial scale of the Org Chart, how zoomed in the chart is when it loads
            scaleInitial: 0.5,

            nodes,
            clinks,
            slinks,
        })
        // Sets chart to be fit to screen, is crashing during add entity on StepChart
        // chart.fit()
    })

    return (
        // componentCalling is used in the style.js file to adjust the size of the Chart div depending on where it is being called
        <OrgChartContainer componentCalling={componentCalling} id="tree" ref={divRef} />
    )
}

export default CurrentOrgChart
