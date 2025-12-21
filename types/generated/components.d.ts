import type { Schema, Struct } from '@strapi/strapi';

export interface SharedDetails extends Struct.ComponentSchema {
  collectionName: 'components_shared_details';
  info: {
    displayName: 'details';
  };
  attributes: {
    detail: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedEmbedSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_embed_sections';
  info: {
    displayName: 'EmbedSection';
  };
  attributes: {
    code: Schema.Attribute.Text & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedInterface extends Struct.ComponentSchema {
  collectionName: 'components_shared_interfaces';
  info: {
    displayName: 'Interface';
  };
  attributes: {
    hero_subtitle: Schema.Attribute.RichText &
      Schema.Attribute.Required &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    hero_title: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
  };
}

export interface SharedProducts extends Struct.ComponentSchema {
  collectionName: 'components_shared_products';
  info: {
    displayName: 'products';
  };
  attributes: {
    price: Schema.Attribute.String & Schema.Attribute.Required;
    product_description: Schema.Attribute.Text & Schema.Attribute.Required;
    product_image: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    product_link: Schema.Attribute.String & Schema.Attribute.Required;
    product_name: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedSubscriptions extends Struct.ComponentSchema {
  collectionName: 'components_shared_subscriptions';
  info: {
    displayName: 'subscriptions';
  };
  attributes: {
    subscriptions_details: Schema.Attribute.Component<'shared.details', true> &
      Schema.Attribute.Required;
    subscriptions_link: Schema.Attribute.String & Schema.Attribute.Required;
    subscriptions_price: Schema.Attribute.String & Schema.Attribute.Required;
    subscriptions_type: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedUrl extends Struct.ComponentSchema {
  collectionName: 'components_shared_urls';
  info: {
    displayName: 'url';
    icon: 'arrowRight';
  };
  attributes: {
    Label: Schema.Attribute.String;
    URL: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.details': SharedDetails;
      'shared.embed-section': SharedEmbedSection;
      'shared.interface': SharedInterface;
      'shared.products': SharedProducts;
      'shared.subscriptions': SharedSubscriptions;
      'shared.url': SharedUrl;
    }
  }
}
