# Compatibility shim: Ruby 3.4+ removed `tainted?`/`untaint` methods.
# Some Liquid versions call `tainted?` on objects; provide a safe fallback.
unless Object.instance_methods.include?(:tainted?)
  class Object
    def tainted?
      false
    end
  end
end
