import React from 'react';
import { Layout, List, Link } from '@dentsu-ui/components';
import { versionHistory } from '../Mock/mockData';
// import { dataFieldCms as PageContent } from '../../cms';


const VersionHistory = (props) => {
  console.log('versionHistory', versionHistory);
  return (
    <>
      <Layout>
        <Layout.Section size="4/6" offset="0" mr={0}>
          {/* <Layout.Panel
            metadata="App name"
            title="Panel Title"
            description="Panel Description"
            actions={<IconButton icon="cog" variant="ghost" size="small" />}
          >
            Hello World
          </Layout.Panel> */}
        </Layout.Section>
        <Layout.Section size="2/6" ml={0}>
          <Layout.Panel
            metadata="App name"
            title="Version history"
          />
          <List
            hasTotal={false}
            isSearchable={false}
            items={versionHistory}
            renderItem={(item, index) => {
              const { name, size, type } = item;
              return (
                <List.Row
                  key={index}
                  metadata={(
                    <Link
                      style={{ color: 'black', textDecoration: 'none' }}
                      onClick={() => showClientDetails(clientCode)}
                    >
                      {name}
                    </Link>
                  )}
                  // media={(
                  //   <Link>
                  //     <Image
                  //       src={avatar}
                  //       size="30px"
                  //       fallbackSrc="https://via.placeholder.com/150"
                  //       onClick={() => showClientDetails(clientCode)}
                  //     />
                  //   </Link>
                  // )}
                  actions={(
                    <Link
                      iconLeft="layers"
                      url={`/datafield?client_code=${clientCode}`}
                    >
                      {cmsData.viewDetails}
                    </Link>
                  )}
                />
              );
            }}
          />

        </Layout.Section>
      </Layout>
    </>
  )
}

export default VersionHistory;
