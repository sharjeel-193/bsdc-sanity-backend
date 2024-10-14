// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'
import category from './category'
import post from './post'
import staff from './staff'
import service from './service'
import feature from './feature'
import serviceType from './serviceType'
import review from './review'
import introduction from './introduction'
import homePage from './homePage'
import offer from './offer'
import aboutPage from './aboutPage'
import layoutData from './layoutData'
import contactPage from './contactPage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  types: schemaTypes.concat([
    post,
    introduction,
    staff,
    category,
    blockContent,
    service,
    serviceType,
    feature,
    review,
    offer,
    homePage,
    aboutPage,
    layoutData,
    contactPage
  ]),
})
