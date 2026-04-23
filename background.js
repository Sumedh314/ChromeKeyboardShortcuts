chrome.commands.onCommand.addListener(async (command) => {
    if (command == 'new_tab_in_group') {
        const [currentTab] = await chrome.tabs.query({ active: true, currentWindow: true });

        const newTab = await chrome.tabs.create({});
        console.log(currentTab.groupId);

        if (currentTab.groupId != -1) {
            chrome.tabs.group({groupId: currentTab.groupId, tabIds: [newTab.id]});
        }
    }
})