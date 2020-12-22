import React, {useEffect} from 'react'
import OrgChart from '@balkangraph/orgchart.js'
import styled from 'styled-components/macro'

const OrgChartContainer = styled.div`
    width: 860px;
    background: ${props => props.theme.white};
    margin-top: 30px;
    height: 516px;
    border-radius: ${props => props.theme.borderRadius};
    box-shadow: ${props => props.theme.boxShadow};
`

const BeginningOrgChartContainer = styled(OrgChartContainer)`
    height: 437px;
`


const CurrentOrgChart = ({componentCalling, nodes}) => {
    const divRef = React.createRef()

    useEffect(() => {
        OrgChart.templates.olivia.field_0 =
            '<text class="field_0" width="230" text-overflow="multiline" style="font-size: 18px;" fill="#000000" x="125" y="30" text-anchor="middle">{val}</text>'
        OrgChart.templates.olivia.field_1 =
            '<text class="field_1" style="font-size: 14px;" fill="#000000" x="125" y="60" text-anchor="middle">{val}</text>'
        OrgChart.templates.olivia.field_2 =
            '<text class="field_2" style="font-size: 14px;" fill="#000000" x="125" y="80" text-anchor="middle">{val}</text>'

        // eslint-disable-next-line no-unused-vars
        const chart = new OrgChart(divRef.current, {
            template: 'olivia',

            nodeBinding: {
                field_0: 'name',
                field_1: 'legal_form',
                field_2: 'location',
            },

            align: OrgChart.ORIENTATION,
            toolbar: {
                layout: false,
                zoom: true,
                fit: true,
                expandAll: true
            },

            enableSearch: true,

            nodes,
        })
    })

    return (
        <>
            {componentCalling === 'StepBeginning' ?
                <BeginningOrgChartContainer id="tree" ref={divRef} /> : <OrgChartContainer id="tree" ref={divRef} />}
        </>
    )
}

export default CurrentOrgChart
