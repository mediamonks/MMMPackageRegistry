# MMMPackageRegistry

[![Build](https://github.com/mediamonks/MMMPackageRegistry/workflows/Build/badge.svg)](https://github.com/mediamonks/MMMPackageRegistry/actions/workflows/build.yml?query=workflow%3ABuild)

This is the registry for all SPM packages we use at [Media.Monks](https://media.monks.com).

We use the [Package Collection Generator](https://github.com/apple/swift-package-collection-generator/tree/main/Sources/PackageCollectionGenerator) as defined in the [documentation](https://www.swift.org/blog/package-collections/#rolling-your-own-collection). So adding a new package is as easy as adding it to `packages.json`, upon pushing to
[GitHub](https://github.com/mediamonks/MMMPackageRegistry), the Actions will take care of the rest.

## Using the registry

Add it to Xcode by entering the URL to the collections registry:

```
https://mediamonks.github.io/MMMPackageRegistry/collection.json
```

You can also use it without Xcode by adding it to the CLI:

```
swift package-collection add https://mediamonks.github.io/MMMPackageRegistry/collection.json
```

## Ready for liftoff? 🚀

We're always looking for talent. Join one of the fastest-growing rocket ships in
the business. Head over to our [careers page](https://media.monks.com/careers)
for more info!
