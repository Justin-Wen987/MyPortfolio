(() => {
  const chinese = {
    'Changyu Wen': '文昌钰',
    'Changyu Wen | Gameplay & Systems Design': '文昌钰｜玩法与系统设计',
    'About | Changyu Wen': '关于我｜文昌钰',
    'Peter Pan | Changyu Wen': 'Peter Pan｜文昌钰',
    'Forgotten Things | Changyu Wen': 'Forgotten Things｜文昌钰',
    'PomoPet | Changyu Wen': 'PomoPet｜文昌钰',
    'DanganMate | Changyu Wen': 'DanganMate｜文昌钰',
    'Home': '首页', 'Work': '作品', 'About': '关于我', 'Contact': '联系',
    'Skip to content': '跳到正文', 'Main navigation': '主导航',
    'Gameplay & systems design': '玩法与系统设计',
    'I design gameplay systems and build playable prototypes.': '我设计玩法系统，并将想法做成可玩的原型。',
    'Explore my work': '查看作品', 'Full gameplay': '完整游戏流程',
    'Resume': '简历', 'Portfolio': '作品集', 'PDF documents': 'PDF 文件',
    'About me': '关于我',
    'BA, Digital Narrative and Interactive Design': '数字叙事与交互设计｜文学学士',
    'University of Pittsburgh, August 2026': '匹兹堡大学，2026年8月毕业',
    'Minor in Information Science': '辅修信息科学',
    'I like seeing someone get interested in a game I’ve made.': '看到别人对我做的游戏产生兴趣，我会很高兴。',
    'In Forgotten Things, a friend struggled with my mouse-and-keyboard controls. I replaced the mixed inputs with seven keys and tap notes, giving each lane a matching key. When they tried again, they could use the controls without a detailed explanation.': '在 Forgotten Things 的试玩中，一位朋友难以适应我设计的键鼠混合操作。我将它改为七键，每条轨道对应一个按键，仅保留单次按键音符。同一位朋友再次试玩时，无需详细说明就能上手。',
    'I’m looking for gameplay and systems design roles.': '我正在寻找玩法策划与系统策划岗位。',
    'Design': '设计方向', 'Process': '工作方式', 'Tools': '工具',
    'Boss encounters, controls, difficulty and reward systems.': 'Boss战、操作方式、难度与奖励系统。',
    'Design documents, playable prototypes and player feedback.': '设计文档、可玩原型与玩家反馈。',
    'Unity, C#, HTML, CSS, JavaScript and GitHub.': 'Unity、C#、HTML、CSS、JavaScript 和 GitHub。',
    'Selected work': '精选作品', 'Games, prototypes and a player tool.': '游戏、原型与玩家工具。',
    'Project directory': '项目目录', 'Gameplay design': '玩法设计', 'Control design': '操作设计',
    'Systems design': '系统设计', 'Player tool': '玩家工具',
    'Team of 2 · Boss design & development · 2025': '双人团队 · Boss战设计与开发 · 2025',
    'Individual project · Control & rhythm design · 2026': '个人项目 · 操作与节奏设计 · 2026',
    'Individual project · Reward system design · 2026': '个人项目 · 奖励系统设计 · 2026',
    'Individual project · Requirements, review & AI workflow': '个人项目 · 需求设计、核对与 AI 工作流',
    'I designed and built a boss encounter where players dodge cannonballs and carry fairy dust to Wendy.': '我设计并开发了Boss战，玩家需要躲避炮弹，将精灵粉尘送到温蒂身边完成营救。',
    'I simplified a rhythm prototype to seven keyboard lanes and tap notes after a friend struggled with the mixed mouse-and-keyboard controls.': '朋友试玩时难以适应键鼠混合操作，我将音游原型简化为七条键盘轨道，仅保留单次按键音符。',
    'A focus timer and to-do list with a pet collection loop: earn tokens, draw pets and recycle duplicates.': '结合宠物收集的番茄钟与待办事项工具：赚取代币、抽取宠物，再回收重复宠物。',
    'I designed a tool to check gifts, track inventory and import supported game saves.': '我设计了一个查询礼物、记录库存并导入受支持游戏存档的工具。',
    'View project': '查看项目', 'Let’s talk games.': '聊聊游戏与设计。',
    'For game design opportunities or questions about my work.': '欢迎交流游戏策划机会，或询问我的项目。',
    'Copy email': '复制邮箱', 'Email copied.': '邮箱已复制。',
    'Please select and copy the email address above.': '请选中上方邮箱地址并手动复制。',
    'Back to top': '返回顶部', '© 2026 Changyu Wen': '© 2026 文昌钰',
    'All work': '全部作品', 'All projects': '全部项目', 'More work': '其他作品',
    'Other projects': '其他项目', 'Have a question about this project?': '想了解这个项目？欢迎联系我。',
    'Overview': '项目概览', 'My role': '我的职责', 'What changed': '设计调整',
    'What players did': '玩家表现', 'What I observed': '试玩观察',
    'October–December 2025': '2025年10月—12月', 'January–April 2026': '2026年1月—4月',
    'March–April 2026': '2026年3月—4月',
    'A boss fight built around rescue.': '以营救为目标的Boss战。',
    '2D platform game · Two-person team · Unity / C#': '2D平台游戏 · 双人团队 · Unity / C#',
    'Designed and built the boss encounter, projectile patterns and Wendy’s rescue system.': '负责Boss战设计与开发，包括炮弹模式和温蒂营救系统。',
    'The first single-shot pattern felt too easy. I added spread and homing projectiles.': '初版单发炮弹难度不足，因此加入散射与追踪炮弹。',
    'Players began looking for gaps between shots. They said the difficulty felt better and the fight was more fun.': '玩家开始寻找炮弹间隙，并反馈调整后的难度更合适、Boss战更有趣。',
    'Watch gameplay': '观看游戏录像', 'Team source code': '团队项目源码',
    'Two ways to dodge': '两种躲避方式', 'Select a screenshot to see the full comparison.': '点击截图可放大查看完整对比。',
    'Three-shot spread': '三发散射', 'Creates several paths to dodge.': '同时形成多条需要躲避的弹道。',
    'Single aimed shot': '单发瞄准弹', 'Direction is set when the shot fires.': '发射时确定方向，之后不会追踪。',
    'The rescue goal': '营救目标',
    'Collect fairy dust and carry it to Wendy to build rescue progress while avoiding the shots.': '躲避炮弹，收集精灵粉尘并带到温蒂身边，累积营救进度。',
    'Designing the rescue': '营救玩法设计', 'Rescue without attacking': '不依靠攻击完成营救',
    'The non-attacking premise was a shared team decision. I designed the boss encounter around collecting dust, moving through projectile patterns and delivering it to Wendy.': '不设置攻击手段是团队共同作出的决定。我围绕收集粉尘、穿过炮弹区域并将粉尘送到温蒂身边来设计Boss战。',
    'What still needed clarity': '仍需说明的目标',
    'Some players did not know where to bring the dust. Explaining the victory condition in person helped them understand the rescue goal.': '部分玩家不知道该把粉尘送到哪里。在旁说明胜利条件后，他们能够理解营救目标。',
    'Team & tools': '团队与工具',
    'Made with Chris Cox. I owned the boss encounter; AI assisted parts of the projectile code. The game uses third-party visual and audio assets.': '与 Chris Cox 合作完成。我负责Boss战，部分炮弹代码使用 AI 辅助；游戏使用了第三方美术与音频素材。',
    'Random dust placement creates a reason to move.': '随机出现的粉尘促使玩家穿行于场景中。',
    'The boss encounter sits within a larger team project.': 'Boss战是团队完整游戏中的一个部分。',
    'Boss encounter & difficulty tuning': 'Boss战与难度调整',
    'Making rhythm controls easier to read.': '让音游操作更容易理解。',
    'Browser rhythm game · Individual project · HTML / CSS / JavaScript': '浏览器音游 · 个人项目 · HTML / CSS / JavaScript',
    'Designed the controls, timing feedback, scoring and note-speed options.': '设计操作方式、时机反馈、计分与音符速度选项。',
    'A friend struggled with using the mouse and keyboard together. I switched to keyboard-only tap notes, with one key for each of the seven lanes.': '一位朋友难以同时操作鼠标和键盘。我改为纯键盘操作，七条轨道各对应一个按键，仅保留单次按键音符。',
    'When the same friend tried again, they could use the revised controls without a detailed explanation.': '同一位朋友再次试玩时，无需详细说明就能使用修改后的操作方式。',
    'Play prototype': '在线试玩', 'Source code': '源代码',
    'Desktop keyboard required for the playable prototype.': '试玩原型需要使用电脑键盘。',
    'Reworking the controls': '重新调整操作方式', 'The revised controls': '修改后的操作',
    'Seven tap-note lanes use S, D, F, Space, J, K and L.': '七条轨道使用 S、D、F、空格、J、K、L，仅保留单次按键音符。',
    'The interface shows timing feedback and note-speed options.': '界面显示时机反馈，并提供音符速度选项。',
    'AI assisted parts of the timing-judgment code.': '部分节奏判定代码使用了 AI 辅助。',
    'The revised keyboard layout and timing feedback.': '修改后的键位布局与时机反馈。',
    'Rhythm controls & player feedback': '音游操作与玩家反馈',
    'A small reward for getting things done.': '给完成任务一个小小的奖励。',
    'Gamified Pomodoro & to-do tool · Individual project · HTML / CSS / JavaScript': '游戏化番茄钟与待办工具 · 个人项目 · HTML / CSS / JavaScript',
    'Wrote the design document first, then defined the reward loop, pet rarities and interface requirements.': '先完成设计文档，再确定奖励循环、宠物稀有度与界面需求。',
    'The loop': '奖励循环',
    'Finish a task or focus cycle, earn a token and draw a pet. Recycle pets for coins; exchange 100 coins for another token.': '完成任务或专注循环获得代币，用于抽取宠物；回收宠物获得金币，100金币可换取一个抽取代币。',
    'A design detail': '一个设计细节',
    'Refined the draw animation by specifying its horizontal movement and gradual slowdown in stages.': '把横向移动和逐渐减速的过程拆成阶段，细化抽取动画的要求。',
    'Try PomoPet': '试用 PomoPet', 'Inside the reward loop': '奖励循环内部',
    'Common': '普通', 'Uncommon': '少见', 'Rare': '稀有',
    'Select pets to recycle for coins.': '选中宠物，将其回收为金币。',
    '100 coins return one draw token.': '100金币可兑换一个抽取代币。',
    'I set the gameplay, interface and visual requirements. AI assisted parts of the JavaScript and generated the pet artwork from my prompts.': '我确定玩法、界面和视觉要求。部分 JavaScript 使用 AI 辅助，宠物图像由 AI 根据我的提示生成。',
    'During self-testing, I kept completing tasks and focus sessions because I wanted the rare dragon. Once the collection is complete, though, there is little else to play. Continued use would depend on how useful the timer and task list are.': '自测时，我为了抽到稀有龙，会继续完成任务和专注循环。但收集完成后，就没有太多可玩的内容了。用户是否继续使用，还取决于计时与待办功能本身是否好用。',
    'Reward loop & pet collection': '奖励循环与宠物收集',
    'A companion handbook for Danganronpa players.': '为《弹丸论破》玩家制作的辅助手册。',
    'Player tool · Requirements & AI workflow': '玩家工具 · 需求设计与 AI 工作流',
    'While playing, I struggled to check which gifts I owned, how many I had and who would like them. Manually counting over 100 items was too slow.': '游玩时，我很难快速确认自己有哪些礼物、各有多少，以及哪些角色喜欢它们。手动统计一百多种物品太费时间。',
    'My decisions': '我的设计决定',
    'I proposed character–gift lookup, inventory tracking and importing supported game saves to avoid entering each quantity by hand.': '我提出了角色与礼物双向查询、库存记录，以及导入受支持游戏存档的功能，减少逐项手动统计。',
    'AI workflow': 'AI 工作流',
    'AI generated all the code. I defined the requirements, reviewed the results and checked how the tool worked.': '全部代码由 AI 生成。我负责提出需求、二次核对结果，并检查工具的实际表现。',
    'Open handbook': '打开手册',
    'This unofficial fan tool uses Danganronpa artwork and interface references.': '这是非官方同人辅助工具，使用了《弹丸论破》的美术素材与界面参考。',
    'Save import & project scope': '存档导入与功能范围',
    'Read a supported save or manage quantities manually.': '读取受支持的存档，或手动管理物品数量。',
    'Import a save or enter quantities': '导入存档或手动填写数量',
    'Supported Steam PC saves provide inventory quantities without entering each gift by hand.': '可从受支持的 Steam 电脑版存档中读取礼物库存，无需逐项输入数量。',
    'Import is limited to supported save formats. Players can also manage quantities manually and export their records as a backup.': '仅支持指定格式的存档。玩家也可以手动管理数量，并导出记录作为备份。',
    'Gift preferences alongside inventory status. English interface.': '礼物偏好与库存状态并排展示，截图为英文界面。',
    'Inventory lookup & AI workflow': '库存查询与 AI 工作流',
    'DanganMate showing Sayaka Maizono’s preferred gifts alongside inventory status.': 'DanganMate 展示舞园沙耶香喜欢的礼物及对应库存状态。',
    'DanganMate in English: Sayaka Maizono’s preferred gifts, an Owned only filter and inventory status beside each gift.': 'DanganMate 英文界面：舞园沙耶香的礼物偏好、仅看已拥有筛选和各礼物的库存状态。',
    'DanganMate’s English save-import and backup page, with a file-selection area and manual inventory option.': 'DanganMate 英文存档导入与备份页，包含文件选择区和手动管理库存选项。',
    'Fairy dust appears away from Wendy, requiring the player to cross the projectile field.': '粉尘出现在远离温蒂的位置，玩家需要穿过炮弹区域进行收集。',
    'Peter Pan in a platforming section of the game.': 'Peter Pan 游戏中的平台跳跃关卡。',
    'Three cannonballs fan out from Hook’s hook, with arrows showing their separate paths.': '三枚炮弹从胡克的钩子处散射发出，箭头标出各自路径。',
    'An arrow from Hook’s hook shows the fixed direction of a single aimed cannonball.': '从胡克钩子出发的箭头，标出单发瞄准弹的固定方向。',
    'Comparison of three-shot spread and single aimed shots, with arrows showing paths from the hook.': '三发散射与单发瞄准弹的对比，箭头标出从钩子发出的路径。',
    'Seven tap-note lanes, a score and timing feedback, with keyboard controls and speed choices shown alongside.': '七条单次按键音符轨道、计分与时机反馈，旁边显示键位和速度选项。',
    'Pet Center with pets selected for recycling into coins.': '宠物中心：选中宠物后可回收为金币。',
    'Buy Token control showing that 100 coins exchange for one token.': '购买代币按钮显示100金币可兑换一个代币。',
    'Play preview': '播放预览', 'Pause preview': '暂停预览', 'Watch full video': '观看完整视频',
    'Gameplay video': '游戏录像', 'Project screenshot': '项目截图',
    'Close': '关闭', 'Zoom in': '放大', 'Fit image': '适应窗口',
    'Open original image': '打开原图', 'Open video directly': '直接打开视频',
    'Screenshots open as full-size images.': '截图可打开查看原图。',
    'Watch the project recording': '观看项目录像',
    'Preview unavailable. You can still open the full video.': '预览暂时无法播放，仍可打开完整视频。',
    'Video could not be loaded. Try opening it directly using the link below.': '视频无法加载，请尝试通过下方链接直接打开。',
    'Image could not be loaded. Try opening the original image.': '图片无法加载，请尝试打开原图。',
    'View full-size DanganMate English interface screenshot': '查看 DanganMate 英文界面原图',
    "Changyu Wen's game design portfolio: boss encounters, rhythm controls, reward systems and player tools.": '文昌钰的游戏设计作品集：Boss战、音游操作、奖励系统与玩家工具。',
    'Changyu Wen, gameplay and systems design portfolio, with real project previews.': '文昌钰的玩法与系统设计作品集，展示实际项目画面。',
    'About Changyu Wen, a University of Pittsburgh graduate interested in gameplay and systems design.': '关于文昌钰：匹兹堡大学毕业生，关注玩法与系统设计。',
  };

  function normalize(value) {
    if (value === 'en') return 'en';
    if (value === 'zh' || value === 'zh-CN' || value === 'cn') return 'zh-CN';
    return null;
  }

  let saved;
  try { saved = localStorage.getItem('portfolio.language'); } catch { /* Storage can be unavailable for local files. */ }
  const lang = normalize(new URL(location.href).searchParams.get('lang')) || normalize(saved) || 'en';
  function t(value) {
    if (lang === 'en') return value;
    if (chinese[value]) return chinese[value];
    const prefixes = {
      'Enlarge screenshot: ': '放大截图：', 'Play preview: ': '播放预览：',
      'Pause preview: ': '暂停预览：', 'Silent looping preview of ': '静音循环预览：',
      'View ': '查看 ', 'Watch full ': '观看完整 ',
    };
    for (const [prefix, translated] of Object.entries(prefixes)) {
      if (value.startsWith(prefix)) {
        return translated + t(value.slice(prefix.length)).replace(/ project$/, ' 项目').replace(/ video$/, ' 视频');
      }
    }
    if (value === 'Silent looping playback of the complete Peter Pan game recording') return 'Peter Pan 完整游戏流程的静音循环预览';
    if (value.endsWith(' recording')) return value.slice(0, -10) + ' 录像';
    if (value.endsWith(' gameplay')) return value.slice(0, -9) + ' 游戏录像';
    if (value.endsWith(' screenshot')) return value.slice(0, -11) + ' 截图';
    if (value.endsWith(' source code')) return value.slice(0, -12) + ' 源代码';
    if (value.endsWith(' | Changyu Wen')) return value.slice(0, -14) + '｜文昌钰';
    return value;
  }

  window.portfolioI18n = { lang, t };
  document.documentElement.lang = lang;
  if (lang !== 'en') {
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (!node.parentElement.closest('script,style') && node.textContent.trim()) nodes.push(node);
    }
    nodes.forEach(node => {
      const value = node.textContent.trim();
      node.textContent = node.textContent.replace(value, t(value));
    });
    document.querySelectorAll('[aria-label],[alt],[data-title],[data-image-alt],meta[content]').forEach(element => {
      for (const attribute of ['aria-label', 'alt', 'data-title', 'data-image-alt']) {
        if (element.hasAttribute(attribute)) element.setAttribute(attribute, t(element.getAttribute(attribute)));
      }
      if (element.matches('meta[name="description"],meta[property="og:title"],meta[property="og:description"],meta[property="og:image:alt"],meta[name="twitter:title"],meta[name="twitter:description"]')) {
        element.content = t(element.content);
      }
    });
  }

  const pages = new Set(['index.html', 'about.html', 'peter-pan.html', 'forgotten-things.html', 'pomopet.html', 'danganmate.html']);
  document.querySelectorAll('a[href]').forEach(link => {
    if (link.hasAttribute('data-language')) {
      const target = new URL(location.href);
      target.searchParams.set('lang', link.dataset.language);
      link.href = target.href;
      link.setAttribute('aria-current', link.dataset.language === lang ? 'true' : 'false');
      link.addEventListener('click', () => {
        try { localStorage.setItem('portfolio.language', link.dataset.language); } catch { /* URL remains sufficient. */ }
      });
      return;
    }
    if (link.hasAttribute('data-pdf')) {
      const name = link.dataset.pdf === 'resume' ? 'Resume_Changyu_Wen' : 'Game_Design_Portfolio_Changyu_Wen';
      link.href = `documents/${name}_${lang === 'en' ? 'EN' : 'CN'}.pdf`;
      return;
    }
    const target = new URL(link.href);
    const raw = link.getAttribute('href');
    if (!/^[a-z][a-z\d+.-]*:/i.test(raw) && (raw.startsWith('#') || pages.has(target.pathname.split('/').pop()))) {
      target.searchParams.set('lang', lang);
      link.href = target.href;
    }
    if (target.hostname === 'justin-wen987.github.io' && target.pathname.startsWith('/DanganMate/')) {
      target.searchParams.set('lang', lang);
      link.href = target.href;
    }
  });
})();
