'use client'
import React, { useState, ReactNode } from 'react';
import styled from 'styled-components';
import Container from '@components/Container';
import TabContent from '@views/partials/TabContent';

type TabContentType = {
    title: string;
    subTitle: string;
    image: string;
    textContent: {
        title: string;
        content: string;
    }[]
}

interface Tab {
    header: string;
    content: TabContentType
}

interface TabsSectionProps {
    tabs: Tab[];
}

const TabsSection: React.FC<TabsSectionProps> = ({ tabs }) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <StyledTabsSection>
            <Container>
                <div className="tabs-header">
                    {tabs?.map((tab, index) => (
                        <button
                            key={index}
                            className={`tab-button ${activeTab === index ? 'active' : ''}`}
                            onClick={() => setActiveTab(index)}
                        >
                            {tab.header}
                        </button>
                    ))}
                </div>
                <div className="tabs-content">
                    <TabContent content={tabs[activeTab].content} />
                </div>
            </Container>
        </StyledTabsSection>
    );
};

export default TabsSection;

// Styled components for TabsSection
const StyledTabsSection = styled.div`
  .tabs-header {
    display: flex;
    justify-content: space-around;
    

    .tab-button {
        width: 100%;
        padding: 1rem 1.5rem;
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.beige};
        cursor: pointer;
        transition: background-color 0.3s;
        font-family: var(--font-montserrat);
        font-size: 1.2rem;
        border-bottom: 2px solid;
        border-color: transparent;
      
        &.active {
            transition: background-color 0.3s;
            background-color: #333;
        }

        &:hover {
            transition: background-color 0.3s;
            background-color: #444;
        }
    }
  }

  .tabs-content {
    font-family: var(--font-montserrat);
    color: ${({ theme }) => theme.colors.beige};
  }
`;
