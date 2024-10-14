export default {
    name: 'service',
    title: 'Service',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
      },
      {
        name: 'category',
        title: 'Category',
        type: 'reference',
        to: [{type: 'serviceType'}]
      },
      {
        name: 'coverImg',
        title: 'Cover Image',
        type: 'image'
      },
      {
        name: 'icon',
        title: 'Icon',
        type: 'image'
      },
      {
        name: 'introduction',
        title: 'Introduction',
        type: 'text',
      },
      {
        name: 'description',
        title: 'Description',
        type: 'blockContent',
      },
    ],
  }
  