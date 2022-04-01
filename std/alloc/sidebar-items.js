initSidebarItems({"fn":[["alloc","使用全局分配器分配内存。"],["alloc_zeroed","使用全局分配器分配零初始化内存。"],["dealloc","使用全局分配器释放内存。"],["handle_alloc_error","由于内存分配错误或失败而终止。"],["realloc","使用全局分配器重新分配内存。"],["set_alloc_error_hook","注册一个自定义分配错误钩子，替换以前注册的任何错误。"],["take_alloc_error_hook","注销当前分配的错误钩子，并返回它。"]],"struct":[["AllocError","`AllocError` 错误表示分配失败，这可能是由于资源耗尽或将给定输入参数与此分配器组合在一起时出错所致。"],["Global","全局内存分配器。"],["Layout","一块内存的布局。"],["LayoutError","给 `Layout::from_size_align` 或其他 `Layout` 构造函数的参数不满足其记录的约束。"],["System","操作系统提供的默认内存分配器。"]],"trait":[["Allocator","`Allocator` 的实现可以分配，增长，收缩和释放通过 [`Layout`][] 描述的任意数据块。"],["GlobalAlloc","可以通过 `#[global_allocator]` 属性将其分配为标准库的默认内存分配器。"]],"type":[["LayoutErr",""]]});