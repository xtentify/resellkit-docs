---
sidebar_position: 4
---

# Autopilot (auto-delister)

The autopilot is designed to assist in inventory management and it helps with reducing the chances of double-sale of an item by checking for the latest orders every 10 minutes (by default) and delisting out-of-stock items on other platforms.

:::info
The autopilot will only function when the app is running. However, This doesn't mean the app should be running 24/7. Running it once a day should be okay for most users.
:::

## Setup

The autopilot's setup should be a straightforward process, Open up the `Settings` page and, Check the "Start on startup" checkbox and then click on `Start autopilot`. From now on every time the app opens it will also start the autopilot.

There are some extra parameters for having more control over how the autopilot works, However, The default options are okay for most users.

<img src="/img/rkss/autopilot-settings.png" alt="Autopilot settings" />

:::info
The autopilot will not retrieve the latest orders on a platform when it has been unchecked under `"Update orders for"` section. This can be useful for when you are no longer using a platform and its sessions is not active anymore. Uncheck that platform to not get the login required error on every update tick.
:::

## Order details

The update order process will retrieve and combine orders from marketplaces. An order has one or more items with its order quantity.

The order status indicates at which stage of the process the order is.

1. `Pending` means the order is not completed yet, However it should get deactivated from other platforms until the next status update.
2. `Compeleted` means the order will not get cancelled anymore. And it is safe to end the listing.
3. When the order's status is `Cancelled`, The autopilot will try to re-activate the listing.

On the status of the listings on each platform, This is updated by the autopilot as it goes through updating the orders. The status will be set to failed if for some reason it fails to update that listing on that specific platfrom.

<img src="/img/rkss/orders-page-sample.png" alt="A sample of orders" />

## Detecting errors

The `Orders` page is specially useful for detecting errors and fixing them, So your inventory keeps being up to date. In this section some tips and reason for possible errors has been collected.

:::tip
By checking `"Hide successful updates"`, Only orders with one or more failure(s) will show up. This is a useful tool for quicky check on what has been failed to get updated.
:::

### Prevent linked listings to break

Imported listings on the app are linked to platforms by the listing id they have for that platform. If the listing id on a platform changes, It will no longer be able to recognize a listing when it sells, And it will be considered as unknown listing. Basically it will fail to delist the listing on other platforms when the item sells.

There are two known reasons where the listing id changes on two platforms.

1. On eBay if the listing gets cancelled and relisted, It may no longer be linked as its id will change.
2. Facebook's relist feature that will also change the listing id of the relisted item.

You can use the `Unlink publisher` & `Link publisher` to re-link the listing when this happens. However, At this time it's recommended to not use relist features outside of the app.

### Orders with unknown listings

By default orders with unknown listings are hidden, This is because in most cases these are sold items that were not cross-listed before. By unchecking `Only show cross-listed` checkbox. You would be able to see these unknown listings.

Checking on unknown listings once in awhile can be useful in case there are cross-listed items with broken links. As stated in "[Prevent linked listings to break](#prevent-linked-listings-to-break)".

## Deactivate autopilot for an order

In some cases the app may continuously fail to update an order. Which will spam the reports slider with errors. In this cases the `Manual` button on the right side of each order can come to the rescue, It will take away the duty to update the listing from the autopilot. So you would be able to manually update the order.
