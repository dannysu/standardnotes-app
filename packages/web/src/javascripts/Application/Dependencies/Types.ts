export const Web_TYPES = {
  Application: Symbol.for('Application'),

  // Services
  AndroidBackHandler: Symbol.for('AndroidBackHandler'),
  ArchiveManager: Symbol.for('ArchiveManager'),
  AutolockService: Symbol.for('AutolockService'),
  ChangelogService: Symbol.for('ChangelogService'),
  DesktopManager: Symbol.for('DesktopManager'),
  SuperConverter: Symbol.for('SuperConverter'),
  Importer: Symbol.for('Importer'),
  ItemGroupController: Symbol.for('ItemGroupController'),
  KeyboardService: Symbol.for('KeyboardService'),
  MobileWebReceiver: Symbol.for('MobileWebReceiver'),
  MomentsService: Symbol.for('MomentsService'),
  PersistenceService: Symbol.for('PersistenceService'),
  RouteService: Symbol.for('RouteService'),
  ThemeManager: Symbol.for('ThemeManager'),
  VaultDisplayService: Symbol.for('VaultDisplayService'),

  // Controllers
  AccountMenuController: Symbol.for('AccountMenuController'),
  ActionsMenuController: Symbol.for('ActionsMenuController'),
  ApplicationEventObserver: Symbol.for('ApplicationEventObserver'),
  FeaturesController: Symbol.for('FeaturesController'),
  FilePreviewModalController: Symbol.for('FilePreviewModalController'),
  FilesController: Symbol.for('FilesController'),
  HistoryModalController: Symbol.for('HistoryModalController'),
  ImportModalController: Symbol.for('ImportModalController'),
  ItemListController: Symbol.for('ItemListController'),
  LinkingController: Symbol.for('LinkingController'),
  NavigationController: Symbol.for('NavigationController'),
  NoAccountWarningController: Symbol.for('NoAccountWarningController'),
  NotesController: Symbol.for('NotesController'),
  PaneController: Symbol.for('PaneController'),
  PreferencesController: Symbol.for('PreferencesController'),
  PurchaseFlowController: Symbol.for('PurchaseFlowController'),
  QuickSettingsController: Symbol.for('QuickSettingsController'),
  SearchOptionsController: Symbol.for('SearchOptionsController'),
  SubscriptionController: Symbol.for('SubscriptionController'),
  SyncStatusController: Symbol.for('SyncStatusController'),
  ToastService: Symbol.for('ToastService'),
  VaultSelectionMenuController: Symbol.for('VaultSelectionMenuController'),

  // Use cases
  GetItemTags: Symbol.for('GetItemTags'),
  GetPurchaseFlowUrl: Symbol.for('GetPurchaseFlowUrl'),
  IsGlobalSpellcheckEnabled: Symbol.for('IsGlobalSpellcheckEnabled'),
  IsMobileDevice: Symbol.for('IsMobileDevice'),
  IsNativeIOS: Symbol.for('IsNativeIOS'),
  IsNativeMobileWeb: Symbol.for('IsNativeMobileWeb'),
  IsTabletOrMobileScreen: Symbol.for('IsTabletOrMobileScreen'),
  LoadPurchaseFlowUrl: Symbol.for('LoadPurchaseFlowUrl'),
  OpenSubscriptionDashboard: Symbol.for('OpenSubscriptionDashboard'),
  PanesForLayout: Symbol.for('PanesForLayout'),
  GetHost: Symbol.for('GetHost'),
  IsApplicationUsingThirdPartyHost: Symbol.for('IsApplicationUsingThirdPartyHost'),
}
