class PagesController < ApplicationController
  def root
    @name = item.name
    @count = item.count
    @description = item.description
  end

  private

  def item
    Item.first
  end
end
