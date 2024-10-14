export default {
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'about',
        title: 'About',
        type: 'reference',
        to: {type: 'introduction'},
      },
      {
        name: 'features',
        title: 'Features',
        type: 'array',
        of: [{type: 'reference', to: {type: 'feature'}}],
      },
      {
        name: 'team',
        title: 'Team',
        type: 'array',
        of: [{type: 'reference', to: {type: 'staff'}}],
      },
      {
        name: 'gallery',
        title: 'Gallery',
        type: 'array',
        of: [ {type: 'image'}]
      }

    ],
  
    
  }
  