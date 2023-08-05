const Ziggy = {"url":"http:\/\/localhost","port":null,"defaults":{},"routes":{"filament.admin.auth.login":{"uri":"admin\/login","methods":["GET","HEAD"]},"filament.admin.auth.logout":{"uri":"admin\/logout","methods":["POST"]},"filament.admin.pages.dashboard":{"uri":"admin","methods":["GET","HEAD"]},"filament.admin.resources.blogs.index":{"uri":"admin\/blogs","methods":["GET","HEAD"]},"filament.admin.resources.blogs.create":{"uri":"admin\/blogs\/create","methods":["GET","HEAD"]},"filament.admin.resources.blogs.edit":{"uri":"admin\/blogs\/{record}\/edit","methods":["GET","HEAD"]},"filament.admin.resources.tags.index":{"uri":"admin\/tags","methods":["GET","HEAD"]},"filament.admin.resources.tags.create":{"uri":"admin\/tags\/create","methods":["GET","HEAD"]},"filament.admin.resources.tags.edit":{"uri":"admin\/tags\/{record}\/edit","methods":["GET","HEAD"]},"sanctum.csrf-cookie":{"uri":"sanctum\/csrf-cookie","methods":["GET","HEAD"]},"livewire.update":{"uri":"livewire\/update","methods":["POST"]},"livewire.upload-file":{"uri":"livewire\/upload-file","methods":["POST"]},"livewire.preview-file":{"uri":"livewire\/preview-file\/{filename}","methods":["GET","HEAD"]},"ignition.healthCheck":{"uri":"_ignition\/health-check","methods":["GET","HEAD"]},"ignition.executeSolution":{"uri":"_ignition\/execute-solution","methods":["POST"]},"ignition.updateConfig":{"uri":"_ignition\/update-config","methods":["POST"]},"blogs.index":{"uri":"\/","methods":["GET","HEAD"]},"blogs.show":{"uri":"blog\/{blog}","methods":["GET","HEAD"],"bindings":{"blog":"slug"}},"tags.show":{"uri":"tag\/{tag}","methods":["GET","HEAD"],"bindings":{"tag":"slug"}}}};

if (typeof window !== 'undefined' && typeof window.Ziggy !== 'undefined') {
    Object.assign(Ziggy.routes, window.Ziggy.routes);
}

export { Ziggy };
