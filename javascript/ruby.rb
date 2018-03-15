def myEach(&prc)
  i = 0
  while i < self.length
    prc.call(self[i])
    i += 1
  end

  self
end

def myMap(&prc)
  mapped = []

  self.myEach do |el|
    mapped << prc.call(el)
  end

  mapped
end
