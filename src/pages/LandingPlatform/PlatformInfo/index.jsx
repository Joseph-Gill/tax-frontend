import React from 'react'
import management from '../../../assets/icons/tax_cheetah_entity_management_example.jpg'
import stepPlan from '../../../assets/icons/tax_cheetah_step_plan_example.jpg'
import predefinedStep from '../../../assets/icons/tax_cheetah_predefined_steps_example.jpg'
import displayTask from '../../../assets/icons/tax_cheetah_task_display_example.jpg'
import legalDocument from '../../../assets/icons/tax_cheetah_legal_document_example.jpg'
import moreToCome from '../../../assets/icons/tax_cheetah_more_to_come_icon.svg'
import {ExampleImage, ExampleImageContainer, ExampleImageTwo, ExampleTextBar, ExampleTextContainer,
    ExampleTextContainerLeft, InfoTitleContainer, MoreToComeImageContainer, PlatformExampleContainer,
    PlatformInfoContainer} from './styles'


const PlatformInfo = () => {
    return (
        <PlatformInfoContainer>
            <InfoTitleContainer>
                <h2>Tax Cheetah&apos;s Corporate Tax Platform</h2>
                <span>Our platform is a unique tool to digitize corporate tax advisory and tax legal entity management both for the in-house</span>
                <span>tax departments as well as for corporate tax advisors in Switzerland and all around the globe.</span>
                <h3>Features included in the tool:</h3>
            </InfoTitleContainer>
            <PlatformExampleContainer>
                <ExampleImageContainer>
                    <ExampleImage alt='entity management' src={management} />
                </ExampleImageContainer>
                <ExampleTextContainer>
                    <ExampleTextBar />
                    <h2>Tax legal entity management</h2>
                    <span>Get a live tax legal entity organization chart at anytime and receive tax relevant</span>
                    <span>information about legal entities (e.g. tax rates, involvement in restructurings) at</span>
                    <span>all time. No more time is lost to gather information (e.g. for auditors).</span>
                </ExampleTextContainer>
            </PlatformExampleContainer>
            <PlatformExampleContainer>
                <ExampleTextContainerLeft>
                    <ExampleTextBar />
                    <h2>Step-plans</h2>
                    <span>Easy drawing of tax step-plans including legal task list. Invite relevant</span>
                    <span>advisors to the platform to comment on tax and legal consequences.</span>
                    <span>Once a step is completed, all relevant information will be automatically</span>
                    <span>fed into legal entity chart and the respective history of the entity.</span>
                </ExampleTextContainerLeft>
                <ExampleImageContainer>
                    <ExampleImage alt='step plan' src={stepPlan} />
                </ExampleImageContainer>
            </PlatformExampleContainer>
            <PlatformExampleContainer>
                <ExampleImageContainer>
                    <ExampleImageTwo alt='predefined steps' src={predefinedStep} />
                </ExampleImageContainer>
                <ExampleTextContainer>
                    <ExampleTextBar />
                    <h2>Automatic display of tax consequences</h2>
                    <span>Swiss tax consequences for various steps are included in the platform.</span>
                    <span>Just let the tool know what the plan is (e.g. dividend distribution,</span>
                    <span>merger) and you will know the tax consequences right away. Whenever</span>
                    <span>you need additional help, our in-house Swiss tax expert can support you</span>
                    <span>or simply invite your local tax advisor to the platform to comment on the</span>
                    <span>tax consequences.</span>
                </ExampleTextContainer>
            </PlatformExampleContainer>
            <PlatformExampleContainer>
                <ExampleTextContainerLeft>
                    <ExampleTextBar />
                    <h2>Automatic display of tasks</h2>
                    <span>Need to know which legal and tax tasks need to be performed to</span>
                    <span>liquidate a company, distribute a dividend or conduct a merger? Our</span>
                    <span>platform includes Swiss legal and tax tasks for many steps.  Needless to</span>
                    <span>say that it is easy to track the progress of the legal implementation on</span>
                    <span>the platform.</span>
                </ExampleTextContainerLeft>
                <ExampleImageContainer>
                    <ExampleImage alt='display task' src={displayTask} />
                </ExampleImageContainer>
            </PlatformExampleContainer>
            <PlatformExampleContainer>
                <ExampleImageContainer>
                    <ExampleImageTwo alt='legal documents' src={legalDocument} />
                </ExampleImageContainer>
                <ExampleTextContainer>
                    <ExampleTextBar />
                    <h2>Automatic drafting of tax and legal documents</h2>
                    <span>The platform drafts Swiss tax and legal documents such as a tax ruling, a</span>
                    <span>withholding tax declaration or a shareholder resolution. All documents</span>
                    <span>are easy accessible at all time by all relevant parties (e.g., advisors,</span>
                    <span>auditors).</span>
                </ExampleTextContainer>
            </PlatformExampleContainer>
            <PlatformExampleContainer>
                <ExampleTextContainerLeft>
                    <ExampleTextBar />
                    <h2>and many more features...</h2>
                    {/* eslint-disable-next-line react/jsx-max-depth */}
                    <span>request your <a href='mailto:info@tax-cheetah.com'>Demo today</a>.</span>
                </ExampleTextContainerLeft>
                <MoreToComeImageContainer>
                    <img alt='more to come' src={moreToCome} />
                </MoreToComeImageContainer>
            </PlatformExampleContainer>
        </PlatformInfoContainer>
    )
}

export default PlatformInfo
