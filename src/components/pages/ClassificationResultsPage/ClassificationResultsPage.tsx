"use client";

import { cn } from "@/lib/utils";
import { HeaderBar, LocationUserSelector } from "@/components/molecules";
import {
  ActiveFiltersSidebar,
  ProductiveFiltersSidebar,
  SortingSidebar,
  CurrentObjectiveSection,
  MainContentHeader,
} from "@/components/organisms";
import { ClassificationResultsLayout } from "@/components/templates";
import { Divider } from "@/components/atoms";
import type { ClassificationResultsPageProps } from "./ClassificationResultsPage.types";

export function ClassificationResultsPage({
  headerTitle,
  locationLabel,
  locationAvatarSrc,
  onLocationClick,
  locationOpen = false,
  originOptions,
  onOriginOptionChange,
  productiveToggleLabel,
  productiveToggleSubLabel,
  productiveToggleChecked,
  onProductiveToggleChange,
  coatDropdownLabel,
  coatDropdownValue,
  coatDropdownOptions,
  onCoatDropdownChange,
  sortValue,
  sortOptions,
  onSortChange,
  objectiveDescription,
  onEditObjectiveClick,
  editObjectiveButtonLabel,
  updatedAtLabel,
  mainTitle,
  mainDescription,
  mainShowInfoIcon,
  onMainInfoClick,
  criteriaExpanded,
  onCriteriaToggle,
  searchPlaceholder,
  searchValue,
  onSearchChange,
  resultsCount,
  resultsCountNumber,
  resultsCountLabel,
  viewMode = "list",
  onViewModeChange,
  onExport,
  children,
  className,
}: ClassificationResultsPageProps) {
  return (
    <ClassificationResultsLayout
      className={cn(className)}
      topBarLeft={<HeaderBar title={headerTitle} />}
      topBarRight={
        <LocationUserSelector
          locationLabel={locationLabel}
          avatarSrc={locationAvatarSrc ?? undefined}
          onClick={onLocationClick}
          isOpen={locationOpen}
        />
      }
      sidebar={
        <div
          className={cn(
            "flex flex-col gap-6",
            "[&_.text-foreground]:text-white! [&_.text-muted-foreground]:text-white/80! [&_.text-primary]:text-white!",
            "[&_select]:text-white! [&_select]:bg-transparent! [&_select]:border-transparent! [&_select]:focus:border-transparent! [&_select]:focus-visible:border-transparent!",
            "[&_hr]:border-white/20"
          )}
        >
          <ActiveFiltersSidebar
            options={originOptions}
            onOptionChange={onOriginOptionChange}
          />
          <Divider />
          <ProductiveFiltersSidebar
            toggleLabel={productiveToggleLabel}
            toggleSubLabel={productiveToggleSubLabel}
            toggleChecked={productiveToggleChecked}
            onToggleChange={onProductiveToggleChange}
            dropdownLabel={coatDropdownLabel}
            dropdownValue={coatDropdownValue}
            dropdownOptions={coatDropdownOptions}
            onDropdownChange={onCoatDropdownChange}
          />
          <SortingSidebar
            value={sortValue}
            options={sortOptions}
            onChange={onSortChange}
          />
          <Divider />
          <CurrentObjectiveSection
            description={objectiveDescription}
            onEditClick={onEditObjectiveClick}
            editButtonLabel={editObjectiveButtonLabel}
          />
        </div>
      }
      mainHeader={
        <MainContentHeader
          updatedAtLabel={updatedAtLabel}
          title={mainTitle}
          description={mainDescription}
          showInfoIcon={mainShowInfoIcon}
          onInfoClick={onMainInfoClick}
          criteriaExpanded={criteriaExpanded}
          onCriteriaToggle={onCriteriaToggle}
          searchPlaceholder={searchPlaceholder}
          searchValue={searchValue}
          onSearchChange={onSearchChange}
          resultsCount={resultsCount}
          resultsCountNumber={resultsCountNumber}
          resultsCountLabel={resultsCountLabel}
          viewMode={viewMode}
          onViewModeChange={onViewModeChange}
          onExport={onExport}
        />
      }
    >
      {children}
    </ClassificationResultsLayout>
  );
}
