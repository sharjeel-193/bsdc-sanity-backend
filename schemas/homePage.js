export default {
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'services',
        title: 'Services',
        type: 'array',
        of: [{type: 'reference', to: {type: 'service'}}],
      },
      {
        name: 'about',
        title: 'About',
        type: 'reference',
        to: {type: 'introduction'},
      },
      {
        name: 'review',
        title: 'Reviews',
        type: 'array',
        of: [{type: 'reference', to: {type: 'review'}}],
      },
      {
        name: 'team',
        title: 'Team',
        type: 'array',
        of: [{type: 'reference', to: {type: 'staff'}}],
      },
      {
        name: 'offer',
        title: 'Offer',
        type: 'reference',
        to: {type: 'offer'},
      },
      {
        name: 'blog',
        title: 'Blogs',
        type: 'array',
        of: [{type: 'reference', to: {type: 'post'}}],
      },

    ],
  
    
  }
  