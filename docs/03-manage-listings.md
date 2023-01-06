---
sidebar_position: 3
---

# Manage Listings 

As a cross-listing tool one of RK's responsibility is to help with inventory management, This page has detailed overview of available features for managing your listings.

## Listing details

The numbered list below has points in the following screenshot.

1. The listing's title, price, quantity & SKU are located at the top of each item. 
2. Below that is a list of published listings for that item. You should be able to view the listing on that platform by clicking on each platform. 
2. In that list the entries that the listing has not been published are regarded as draft listings. They are dimmed out, and you can publish the drafts by clicking on them. Or click on the red `X` button on the right to remove that draft.

<img src="/img/rkss/item-details-on-listings-page.png" alt="Listing details on the listings page" />

## Filters

The numbered list below has points in the following screenshot.

1. To filter items based on their status, This one is useful when you want to work on only listings with `Draft` or `Published` status. 
2. Search for listings based on their title, sku or the listing ids. [Click here](#search-queries) to get more details on possible search queries.
3. Order listings based on the creation date, title, price & sku.
4. Markets selection allows you to filter items only if they have listings on a particular marketplace (platform).

<img src="/img/rkss/filters-on-listings-page.png" alt="Filters on the listings page" />

### Search queries

Here are the list of queries you can use in the search box.

1. By default filters based on title contains one or more of the searched terms.
2. Match by SKU, If the query matches a SKU.
3. To find SKUs that starts with a text, The query should start with `sku^=` and then the text, Example: `sku^=Z2`.
4. To find SKUs with Regex. The query should start with `sku~=` and followed by the Regex.  
Like this: `sku~=/^[0-9]+$/i`, This query will search for skus that only contain numerical characters.  
(More on Regex: <a href="https://regexr.com/" rel="nofollow" target="_blank">regexr</a>: learn, build, & test)

## Publish Drafts

Usually imported items will get added as `Draft` listings, Meaning the are in the list of listings that are waiting to get published. The `Publish Draft` button will open up the publish page and it will go through every draft listing until all of them are listed.

## Actions

To manage listings efficiently some useful actions has been intergrated in the app, Certain actions are useful for correcting problems or cross list to more platforms or ending a listing on published markets, Also there are some addon features like changing listing quantity or price.

The actions button is located on the top right of every item, Click on it go see the possible actions. [Actions can also be taken in bulk](#bulk-actions).

<img src="/img/rkss/actions-dropdown-on-listings-page.png" alt="Actions dropdown on the Listings page" />

- `Add Publisher`, List to more markets by adding a new publisher.
- `Relist`, `(DEPRECATED)` Manual relist to an existing market.
- `End Listing`, To end the listing and remove it from all markets
- `Change Quantity`, Set the quantity of the listing and updating it on applicable marketplaces.
- `Change Price`, Set the price of the listing and update it on the published marketplaces.
- `Change SKU`, Only updates the SKU in the RK's database.
- `Update from source`, To reload the listing data from the source platform (from where the listing was imported). This action is useful when the listing photos are not downloaded correctly.
- `Show photos folder`, Open the directory where the photos of the listing is downloaded.
- `Remove from a publisher`, This action will remove a listing from specific markets.
- `Link a publisher`, If you have already cross-listed the item (outside of the app), You would be able to link it by this action.
- `Unlink a publisher`, Only removes the link to a linked listing. This can be useful when the was a mistake when a listing was linked.
- `Delete from RK`, Only removes the item from the RK's database. This action will **NOT** remove the listing from the markets.

## Bulk Actions

Most of the actions can also be done in bulk by using the select mode. Click on the `Select` button and select the listings you want to perform the actions to. Then click on the actions dropdown on the top right of the screen.

<img src="/img/rkss/bulk-actions-dropdown-on-listings-page.png" alt="Actions dropdown on the Listings page" />

## Export csv file

Some may find export to csv file useful, In case they want to have access to the data in a spreadsheet. By default it will export all listings in a csv file. You can also export a sub set of listings, By using the select mode to select the items and then export.

<small class="d-block gray-text margin-top-50">

Stock photos are from:

- <a href="https://www.freepik.com/free-photo/confident-serious-handsome-man-wears-black-leather-jacket-gray-t-shirt-stylish-eyewear-looks-directly-into-camera-isolated-people-style-concept_8920525.htm#query=jacket&position=0&from_view=search&track=sph">Image by cookie_studio</a> on Freepik
- <a href="https://www.freepik.com/free-photo/sport-jacket-clothing_1026998.htm#query=jacket&position=3&from_view=search&track=sph">Image by mrsiraphol</a> on Freepik
- <a href="https://www.freepik.com/free-photo/young-woman-wearing-jacket-walking-outside_11599573.htm#query=women%20jacket&position=15&from_view=search&track=sph">Image by senivpetro</a> on Freepik

</small>
