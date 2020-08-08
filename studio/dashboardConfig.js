export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f2e7e01bf54e919e37196ea',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-cw64iswh',
                  apiId: 'e5a0a196-a28d-48f6-b062-b6cbcee952df'
                },
                {
                  buildHookId: '5f2e7e021e3aa5377703228f',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-7htqg8pg',
                  apiId: 'b329f772-a061-4ea7-aa96-c319903b1c86'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Ali-Arsal/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-7htqg8pg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
