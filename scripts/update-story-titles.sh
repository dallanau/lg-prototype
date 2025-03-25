#!/bin/bash

# Function to update story titles
update_stories() {
  local pattern=$1
  local replacement=$2
  local dir=$3
  
  # Find all stories files and update them
  find "$dir" -name "*.stories.tsx" -type f -exec sed -i '' "s/title: '$pattern/title: '$replacement/g" {} \;
  
  echo "Updated stories in $dir"
}

# Update all stories
update_stories "Atoms" "Foundation" "src/components/atoms"
update_stories "Molecules" "Components" "src/components/molecules"
update_stories "Organisms" "Sections" "src/components/organisms"
update_stories "Templates" "Layout" "src/components/templates"
update_stories "Pages" "Pages" "src/stories/pages"
update_stories "页面" "Pages" "src/stories/pages"

echo "All story titles updated successfully." 