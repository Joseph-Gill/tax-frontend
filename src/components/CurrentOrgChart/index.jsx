import React, {useEffect} from 'react'
import OrgChart from '@balkangraph/orgchart.js'
import {OrgChartContainer} from './styles'
import './styles.css'


const CurrentOrgChart = ({componentCalling, clinks, nodes, slinks}) => {
    const divRef = React.createRef()

    useEffect(() => {
        OrgChart.templates.olivia.field_0 =
            '<text class="field_0" width="230" text-overflow="multiline" style="font-size: 18px;" fill="#000000" x="125" y="30" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'
        OrgChart.templates.olivia.field_1 =
            '<text class="field_1" style="font-size: 14px;" fill="#000000" x="125" y="60" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'
        OrgChart.templates.olivia.field_2 =
            '<text class="field_2" style="font-size: 14px;" fill="#000000" x="125" y="80" text-anchor="middle" font-family="Nunito Sans, sans-serif">{val}</text>'

        // eslint-disable-next-line no-unused-vars
        const chart = new OrgChart(divRef.current, {
            template: 'olivia',

            nodeBinding: {
                field_0: 'name',
                field_1: 'legal_form',
                field_2: 'location',
            },

            toolbar: {
                layout: false,
                zoom: true,
                fit: true,
                expandAll: true
            },

            enableSearch: true,

            nodes,
            clinks,
            slinks,
        })
        // Sets chart to be fit to screen, is crashing during add entity on StepChart
        // chart.fit()
    })

    return (
        <OrgChartContainer componentCalling={componentCalling} id="tree" ref={divRef} />
    )
}

export default CurrentOrgChart
