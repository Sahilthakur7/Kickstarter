import React from 'react';
import factory from '../ethereum/factory';
import { Card, Button } from 'semantic-ui-react';

class CampaignIndex extends React.Component {
    
    static async getInitialProps() {
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return {
            campaigns: campaigns
        }
    }

    renderCampaigns() {
        const items = this.props.campaigns.map((address) => {
            return { 
                header: address,
                description: <a>Link</a>,
                fluid: true
            }
        })

        return <Card.Group items={items} />;
    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
                <h3>Open Campaigns</h3>

                {this.renderCampaigns()}
                <Button content="Create Campaign"
                    icon="add circle"
                    color="green"
                    />
            </div>
        );
    }
}

export default CampaignIndex;
