import type { Schema, Struct } from '@strapi/strapi';

export interface SharedBookSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_book_sections';
  info: {
    displayName: 'book section';
  };
  attributes: {
    books: Schema.Attribute.Component<'shared.books', true>;
    hero_subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    hero_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SharedBooks extends Struct.ComponentSchema {
  collectionName: 'components_shared_books';
  info: {
    displayName: 'books';
  };
  attributes: {
    author_name: Schema.Attribute.String & Schema.Attribute.Required;
    book_cover: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    book_description: Schema.Attribute.Text & Schema.Attribute.Required;
    book_link: Schema.Attribute.String & Schema.Attribute.Required;
    book_title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

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

export interface SharedProductSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_product_sections';
  info: {
    displayName: 'product section';
  };
  attributes: {
    product_hero_subtitle: Schema.Attribute.Text & Schema.Attribute.Required;
    product_hero_title: Schema.Attribute.String & Schema.Attribute.Required;
    products: Schema.Attribute.Component<'shared.products', true>;
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

export interface SharedSubscriptionSection extends Struct.ComponentSchema {
  collectionName: 'components_shared_subscription_sections';
  info: {
    displayName: 'subscription section';
  };
  attributes: {
    subscriptions: Schema.Attribute.Component<'shared.subscriptions', true> &
      Schema.Attribute.Required;
    subscriptions_hero_subtitle: Schema.Attribute.Text &
      Schema.Attribute.Required;
    subscriptions_hero_title: Schema.Attribute.String &
      Schema.Attribute.Required;
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
      'shared.book-section': SharedBookSection;
      'shared.books': SharedBooks;
      'shared.details': SharedDetails;
      'shared.embed-section': SharedEmbedSection;
      'shared.interface': SharedInterface;
      'shared.product-section': SharedProductSection;
      'shared.products': SharedProducts;
      'shared.subscription-section': SharedSubscriptionSection;
      'shared.subscriptions': SharedSubscriptions;
      'shared.url': SharedUrl;
    }
  }
}
